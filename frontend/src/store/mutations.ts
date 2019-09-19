import { RootState, SnackbarOptions } from './types'
import { MutationTree } from 'vuex'
import { InstanceData, Instance } from '@/models/instance'
import { MetricData } from '@/models/metric'
import { MetricView, MetricViewClass } from '@/models/metricView'

const mutations: MutationTree<RootState> = {
    setInstances(state, payload: InstanceData[]) {
        payload.forEach(i => {
            const instance = state.instances.find(inst => inst.id === i.id)
            if (instance) {
                instance.update(i)
                payload.splice(payload.indexOf(i, 1))
            } else {
                state.instances.push(new Instance(i))
            }
        })
    },
    setInstanceMetrics(state, payload: MetricData) {
        const instance = state.instances.find((i: Instance) => i.id === payload.instance_id)
        if (instance) {
            instance.metrics = payload.metrics
        }
    },
    setMetrics(state, payload) {
        if (payload.metrics.length) {
            state.metrics = payload.metrics.map((i: MetricView) => new MetricViewClass(i))
        } else {
            state.metrics = []
        }
    },
    openSnackbar(state, { message, colour, timeout = 3000 }: SnackbarOptions) {
        state.snackbar.message = message
        state.snackbar.colour = colour
        state.snackbar.timeout = timeout
        state.snackbar.enabled = true

        setTimeout(() => state.snackbar.enabled = false, timeout)
    },
}
export default mutations
