export interface MetricData {
    id: string
    name: string
    data: number[]
    graphType: string
}

export class Metric {
    public id: string
    public name: string
    public data: number[]
    public graphType: string = 'line'
    public min: number = 0
    public max: number = 100

    constructor(data: MetricData) {
        this.id = data.id
        this.name = data.name
        this.data = data.data
        if (data.graphType !== undefined) {
            this.graphType = data.graphType
        }
    }
}
