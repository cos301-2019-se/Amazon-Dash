<template>
    <v-card class="mx-auto">
        <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
                center
        >
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
            ></v-progress-circular>
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
