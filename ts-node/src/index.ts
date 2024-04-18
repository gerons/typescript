import { printObjet, genericFunction, genericFunctionArrow } from "./generics/generics";
import { Villain, Hero } from "./interfaces";


// printObjet(123)
// printObjet( new Date())

// console.log(genericFunction(3.14163455).toFixed(2))
// console.log(genericFunction('Hola Mundo').toLocaleLowerCase())
// console.log(genericFunction(new Date()).getDate())

// console.log(genericFunctionArrow(3.14163455).toFixed(2))
// console.log(genericFunctionArrow('Hola Mundo').toLocaleLowerCase())
// console.log(genericFunctionArrow(new Date()).getDate())


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool))