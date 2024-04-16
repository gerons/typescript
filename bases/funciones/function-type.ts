(() => {

    const addNumber = (a: number, b: number): number => a + b
    const greet = (name: string): string => `Hola ${name}`
    const saveTheWorld = (): string => `El mundo está salvado`

    let myFunction: (x:number, y: number) => number

    //* myFunction = 10
    //* console.log(myFunction)

    myFunction = addNumber
    console.log(myFunction(10, 20))

    //? myFunction = greet
    //? console.log(myFunction('Lucas'))

    //! myFunction = saveTheWorld
    //! console.log(myFunction())

})()