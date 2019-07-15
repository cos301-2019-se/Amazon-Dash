<template>
    <v-container grid-list-md fluid fill-height>
        <v-layout row justify-center>
            <v-flex xs12 md6 lg4 v-for="metric in metrics" :key="metric.id">
                <MetricCard :metric="metric"></MetricCard>
            </v-flex>
        </v-layout>
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

        private mounted() {
            this.$store.dispatch('fetchMetrics', this.instanceId)
        }

        private get metrics() {
            console.log(this.$store.getters.metrics)
            return this.$store.getters.metrics
        }
    }
</script>

<style scoped>

</style>
