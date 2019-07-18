export interface MetricViewDataPoint {
    timestamp: string
    value: number
}

export class MetricViewDataPointClass {
    public timestamp: string
    public value: number
    constructor(data: MetricViewDataPoint) {
        this.timestamp = data.timestamp
        this.value = data.value
    }
}
