(() => {

    interface Xmen {
        name: string
        realName: string
        mutantPower(id: number): string
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        public name: string
        public realName: string
        public age: number

        constructor(name: string, realName: string) {
            this.name = name
            this.realName = realName
            this.age = 30
        }

        mutantPower(id: number): string {
            return `${this.name} is using his power with id: ${id}`
        }
    }
})()