(() => {

    class Avenger {
        constructor (
            public name: string,
            public realName: string
            
        ){
            // console.log('Constructor Avenger cargado... ')
        }

        protected getFullName () {
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor (
            name: string,
            realname: string,
            public isMutant: boolean
        ) {
            super(name, realname)
            // console.log('Constructor Xmen cargado... ')
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`
        }

        set setName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres')
            }

            this.name = name
        }

        getFullNameDesdeXmen() {
            // console.log('Desde Xmen', this.getFullName() )
        }
    }

    let wolverin: Xmen = new Xmen('Wolverine', 'Logan', true)

    // console.log(wolverin.fullName)

    wolverin.setName = 'Gero'

    // console.log(wolverin.fullName)

})()