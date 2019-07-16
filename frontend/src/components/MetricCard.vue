<template>
    <v-card class="v-card--padding mt-3 mx-auto"
            max-width="400">
        <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
                center
                height="200px"
        >
            <la-cartesian :data="metric.data" :height="200" :bound="bounds" autoresize>
                <la-line animated :width="2" curve prop="value" color="white"></la-line>
                <la-x-axis color="white"></la-x-axis>
                <la-y-axis color="white" prop="value"></la-y-axis>
                <la-tooltip></la-tooltip>
            </la-cartesian>
        </v-sheet>
        <v-card-title>
            <span class="headline">{{ metric.id }}</span>
        </v-card-title>
    </v-card>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {Metric, MetricData, metricOptions} from "@/models/metric";
    import {MetricViewClass} from "@/models/metricView"

    @Component
    export default class MetricCard extends Vue {
        @Prop() public metric: MetricViewClass
        public bounds:any = []
        public mounted() {
            this.bounds = this.getBounds()
            if(this.metric.id == "cpu"){
                this.metric.data.map(i=>{
                    i.value = i.value*100
                })
            }
        }

        private getBounds(){
            return metricOptions.find((i:any) => {
                return i.id === this.metric.id;
            }).bound
        }

    }
</script>

<style scoped>
    .v-sheet--offset {
        top: -35px;
        position: relative;
    }
    .v-card--padding{
        padding-top: 20px;
    }
    .metric-label {
        position: absolute;
        top: .5rem;
        right: .5rem;
        color: white;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
</style>
