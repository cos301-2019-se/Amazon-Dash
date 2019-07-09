export interface MetricData {
    id: string
    name: string
    data: Data[]
    graphType: string
    dates: string[]
}

export interface DataInterface {
    value: number
    date: string
}

export class Data{
    public value: number
    public date: string

    constructor(data: DataInterface) {
        this.value = data.value
        this.date = data.date
    }
}

export class Metric {
    public id: string
    public name: string
    public data: Data[]
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
