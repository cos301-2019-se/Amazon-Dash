export interface MetricDatapoint {
    timestamp: string
    value: number
}

export interface Metric {
    id: string
    data: MetricDatapoint[]
}

export interface MetricData {
    instance_id: string
    metrics: Metric[]
}

const defaultBounds = [(n: number) => Math.floor(n), (n: number) => Math.ceil(n)]
export const metricOptions = [
    { id: 'cpu', name: 'CPU Utilization', unit: 'Percentage', bound: [0, 100] },
    { id: 'netin', name: 'Network In', unit: 'Bytes', bound: defaultBounds },
    { id: 'netout', name: 'Network Out', unit: 'Bytes', bound: defaultBounds },
    { id: 'netpacketin', name: 'Network Packets In', unit: 'Packets', bound: defaultBounds },
    { id: 'netpacketout', name: 'Network Packets Out', unit: 'Packets', bound: defaultBounds },
    { id: 'diskread', name: 'Disk Read', unit: 'Bytes', bound: defaultBounds },
    { id: 'diskwrite', name: 'Disk Write', unit: 'Bytes', bound: defaultBounds },
    { id: 'diskreadops', name: 'Disk Read Ops', unit: 'Operations', bound: defaultBounds },
    { id: 'diskwriteops', name: 'Disk Write Ops', unit: 'Operations', bound: defaultBounds },
]
