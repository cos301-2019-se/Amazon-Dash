export interface MetricViewDataPoint {
    timestamp: string
    value: number
}

export class MetricViewDataPointClass {
    timestamp: string;
    value: number;
    constructor(data: MetricViewDataPoint){
        this.timestamp = data.timestamp;
        this.value = data.value
    }
}

export interface MetricView {
    id: string
    data: MetricViewDataPoint[]
}

export class MetricViewClass {
    id: string;
    data: MetricViewDataPointClass[];
    constructor(data: MetricView){
      this.id = data.id;
      this.data = data.data.map(value => {
          return new MetricViewDataPointClass(value)
      })
    }
}