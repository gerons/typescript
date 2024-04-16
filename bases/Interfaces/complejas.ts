(() => {

    interface Client {
        name: string
        age?: number
        address?: Address
        getFullAddress(id: string): string
    }

    interface Address {
        id: number
        city: string
        country: string
    }
    
    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: Date.now(),
            city: 'Madrid',
            country: 'España'
        },
        getFullAddress(id: string) {
            return `${this.address.city}, ${this.address.country}`
        }
    }

    const client2: Client = {
        name: 'Luis',
        age: 30,
        address: {
            id: Date.now(),
            city: 'Barcelona',
            country: 'España'
        }
    }
})()