import { Metric, getMetricName } from '@/models/metric'

export interface InstanceData {
    id: string
    name: string
    state: State
}

export interface State {
    Code: number
    Name: string
}

const stateColourMap: { [key: number]: string } = {
    0: 'orange',
    16: 'green',
    32: 'orange',
    48: 'red',
    64: 'orange',
    80: 'grey',
}

export class Instance {
    public id: string
    public name: string
    public metrics: Metric[]
    private state: State

    constructor(data: InstanceData) {
        this.id = data.id
        this.name = data.name
        this.state = data.state
        this.metrics = []
    }

    public update(data: InstanceData) {
        this.name = data.name
        this.state = data.state
    }

    public get stateName() {
        return this.state && this.state.Name.split('-')
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' ')
    }

    public get stateColour() {
        return this.state ? (stateColourMap[this.state.Code] || 'grey') : 'grey'
    }

    public get running() {
        return this.state.Code === 16
    }

    public getMetric(metricId: string) {
        const multiplier = metricId === 'cpu' ? 100 : 1
        const metric = this.metrics.find(m => m.id === metricId)
        if (metric) {
            return metric.data.map(m => ({ value: m.value * multiplier }))
        }
        return []
    }

    public getMetrics(filter?: string) {
        const search = (filter || '').toLowerCase()
        return this.metrics.filter(m =>
            m.id.toLowerCase().includes(search) ||
            getMetricName(m.id).toLowerCase().includes(search))
    }
}
