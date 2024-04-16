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
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: Date.now(),
            city: 'Madrid',
            country: 'España'
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.country}`;
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
//# sourceMappingURL=main.js.map