(() => {

    // definir un tipo
    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Gero'
    console.log(typeof myCustomVariable)

    myCustomVariable = 100
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Goku',
        age: 40,
        powers: [1, 2, 3]
    }
    console.log(typeof myCustomVariable)
})()