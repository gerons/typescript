(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado'
        }
    }

    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado'
        }
    }

    let wolverin = new Xmen('Wolverine', 'Logan')
    const magneto = new Villian('Magneto', 'Magnus')

    // console.log(wolverin)
    // console.log(magneto)

    const printName = (character: Mutante) => {
        // console.log(character.realName)
    }

    printName(wolverin)

})()