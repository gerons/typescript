function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false): Function => {
    if (print) {
        return printToConsole
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonid() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function(id: number) {
            if (id < 1 || id > 800) {
                return console.error('Invalid pokemon id')
            } else {
                return originalMethod(id)
            }
        }
    }
}

function readonly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Gero'
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}


@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    @readonly(false)
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/'
    
    constructor(
        public name: string
    ) {}

    @CheckValidPokemonid()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en la DB con el id ${id}`)
    }
}