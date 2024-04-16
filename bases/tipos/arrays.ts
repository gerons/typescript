(() => {

    const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]
    const number2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde']

    number.push(true)

    villians.forEach(v => { console.log(v.toUpperCase()) })
    number.forEach(v => { console.log(v) })


})()