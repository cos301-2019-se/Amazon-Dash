import Vue from 'vue'
import { Instance } from '@/models/instance'
import { MetricViewClass } from '@/models/metricView'

export interface Snackbar {
    message: string
    colour: string
    timeout: number
    enabled: boolean
}

export interface SnackbarOptions {
    message: string
    colour: string
    timeout?: number
}

export interface RootState {
    token: string | null
    instances: Instance[]
    bus: Vue
    snackbar: Snackbar
    metrics: MetricViewClass[]
    evtSource?: EventSource
}
