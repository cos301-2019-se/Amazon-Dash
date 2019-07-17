import {MetricViewDataPoint, MetricViewDataPointClass} from '@/models/MetricViewDataPoint'
export interface MetricView {
    id: string
    data: MetricViewDataPoint[]
}

export class MetricViewClass {
    public id: string
    public data: MetricViewDataPointClass[]
    constructor(data: MetricView) {
      this.id = data.id
      this.data = data.data.map(value => {
          return new MetricViewDataPointClass(value)
      })
    }
}
