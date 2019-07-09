<template>
    <v-card class="mx-auto">
        <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
                center
        >
            <la-cartesian :data="metric.data" :bound="[metric.min, metric.max]" autoresize>
                <la-line animated :width="2" curve prop="value" color="white"></la-line>
                <la-x-axis color="white" prop="date"></la-x-axis>
                <la-y-axis color="white"></la-y-axis>
                <la-tooltip></la-tooltip>
            </la-cartesian>
        </v-sheet>
        <v-card-title>
            <span class="headline">{{ metric.name }}</span>
        </v-card-title>
    </v-card>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {Metric} from "@/models/metric";

    @Component
    export default class MetricCard extends Vue {
        @Prop() public metric: Metric
    }
</script>

<style scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }
</style>
