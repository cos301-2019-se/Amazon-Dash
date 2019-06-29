export interface InstanceData {
    id: string
    name: string
}

export class Instance {
    public id: string
    public name: string

    constructor(data: InstanceData) {
        this.id = data.id
        this.name = data.name
    }
}
