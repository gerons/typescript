(() => {

    class Avenger {
        // private name: string
        // public team: string
        // public realName?: string
        static avgAge: number = 35

        constructor(
            private name: string,
            public team: string,
            public realName?: string
        ) {}

        static getClassName() {
            return this.name
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang')
    // console.log(antman)

    // console.log(Avenger.getClassName())

})()