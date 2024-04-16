(() => {

    class Avenger {
        name
        power

        constructor(name='Sin nombre', power=0) {
            this.name = name
            this.power = power
        }
    }

    class FlyingAvenger extends Avenger {
        fly() {
            console.log('I\'m flying')
        }

        constructor(name, power) {
            super(name, power)
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvenger('Falcon', 50)

    console.log(falcon)
    console.log(falcon.fly())

})()