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
    0: 'yellow',
    16: 'green',
    32: 'orange',
    48: 'red',
    64: 'orange',
    80: 'grey',
}

export class Instance {
    public id: string
    public name: string
    private state: State

    constructor(data: InstanceData) {
        this.id = data.id
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
}
