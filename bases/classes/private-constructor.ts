(() => {

    class Apocalipsis {
        static instance: Apocalipsis

        private constructor( public name: string ) {}

        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único')
            }

            return Apocalipsis.instance
        }

        set setName(name: string) {
            this.name = name
        }
    }

    const apoalipsis = Apocalipsis.callApocalipsis()
    apoalipsis.setName = 'Xavier'
    const apoalipsis2 = Apocalipsis.callApocalipsis()

    console.log(apoalipsis, apoalipsis2)

})()