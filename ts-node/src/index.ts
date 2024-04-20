import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('charmander')
charmander.publicApi = 'https://mapas-digitales.com'

console.log(charmander.publicApi)