(() => {
    type Avengers = {
        nick: string
        ironman: string
        vision: string
        activo: boolean
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1235
    }

    // const { poder, ironman } = avengers;
    // console.log(poder.toFixed(2), ironman.toUpperCase());

    const printAvenger = ( { vision, ...resto }: Avengers ) => {
        console.log( vision, resto )
    }

    printAvenger( avengers )

    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk']

    const [ cap, , hulk ] = avengersArr
    console.log(cap, hulk)

})()