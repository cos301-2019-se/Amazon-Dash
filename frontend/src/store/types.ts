import Vue from 'vue'

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
    instances: any[]
    bus: Vue
    snackbar: Snackbar
}
