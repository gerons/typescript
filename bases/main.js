"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [2],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            this.age = 30;
        }
        mutantPower(id) {
            return `${this.name} is using his power with id: ${id}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: Date.now(),
            city: 'Madrid',
            country: 'España'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Luis',
        age: 30,
        address: {
            id: Date.now(),
            city: 'Barcelona',
            country: 'España'
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map