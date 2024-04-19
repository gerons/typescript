import { getPokemon } from "./generics/get-pokemon";


getPokemon(1)
    .then( pokemon => console.log( pokemon.name.toUpperCase() ) )
    .catch( error => console.log( error ) )
    .finally( () => console.log('Finalizado...') )