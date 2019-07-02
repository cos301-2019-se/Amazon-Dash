export interface MetricData {
    id: string
    name: string
    data: number[]
}

export class Metric {
    public id: string
    public name: string
    public data: number[]
    public min: number
    public max: number

    constructor(data: MetricData) {
        this.id = data.id
        this.name = data.name
        this.data = data.data
        this.min = 0
        this.max = 100
    }
}
