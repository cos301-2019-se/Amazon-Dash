import Vue from 'vue'
import { Instance } from '@/models/instance'

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
    metrics: any[]
}
