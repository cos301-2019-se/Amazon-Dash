<template>
    <v-container >
        <v-text-field
                label="Search"
                v-model="searchFilter"
                append-icon="search"
                clearable
                type="text"
        ></v-text-field>
        <v-container grid-list-md fluid fill-height>
            <v-layout row wrap justify-center>
                <v-flex xl1 lg3 md4 sm6 xs12 v-for="metric in metrics" :key="metric.id" column>
                    <MetricCard :metric="metric"></MetricCard>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import MetricCard from '@/components/MetricCard.vue'

    @Component({
        components: { MetricCard },
    })
    export default class Metrics extends Vue {
        @Prop() public instanceId: string
        searchFilter: string ='';
        private metricPoller = -1

        private mounted() {
            this.$store.dispatch('fetchMetrics', this.instanceId)
            this.metricPoller = setInterval(() => this.$store.dispatch('fetchMetrics', this.instanceId), 5000)
        }

        public beforeDestroy() {
            clearInterval(this.metricPoller)
        }

        private get metrics() {
            console.log(this.$store.getters.metrics)
            return this.$store.getters.metrics.filter(i => i.id.toLowerCase().includes((this.searchFilter || '').toLowerCase()))
        }
    }
</script>

<style scoped>

</style>
