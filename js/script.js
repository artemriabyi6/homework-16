

class Journey {
    constructor(place, transport, hours, cost, boolean) {
        this.place = place
        this.transport = transport
        this.hours = hours
        this.cost = cost
        this.boolean = boolean

        if(typeof place !== 'string' || typeof transport !== 'string') {
            throw new Error('Uncorrect filled blank: must be a string')
        }
        if(typeof hours !== 'number' || typeof cost !== 'number') {
            throw new Error('Uncorrect filled blank: must be a number')
        }
        if(typeof boolean !== 'boolean') {
            throw new Error('Uncorrect filled blank: must be a boolean')
        }
    }

    highPrice() {
        this.cost+= 300
    }

    sales() {
        this.cost-= 800
    }
}

let ontario = new Journey('Ontario', 'Plane', 12, 2500, true)

module.exports = Journey