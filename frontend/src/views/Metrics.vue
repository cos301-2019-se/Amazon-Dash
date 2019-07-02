<template>
    <v-container grid-list-md>
        <v-layout row>
            <v-flex xs6 v-for="metric in metrics" :key="metric.id">
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
            this.$store.dispatch('fetchMetrics')
        }

        private get metrics() {
            return this.$store.getters.metrics
        }
    }
</script>

<style scoped>

</style>
