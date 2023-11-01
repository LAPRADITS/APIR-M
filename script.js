document.getElementById("search").addEventListener("click", ()=> {
    displayPokemon();
    
});

async function displayPokemon (){
    const personajeName = document.getElementById("pokemon").value;
    const personaje = await getPokemon(personajeName);
    addPokemonUI(personaje);
}

async function getPokemon (numero){
const response = await fetch(`https://rickandmortyapi.com/api/character/${numero}`)
console.log(numero);
return await  response.json(); 
}

function addPokemonUI (personaje){
 const pokemonList =   document.getElementById("pokemon-container")
 const element = document.createElement("div");
 element.innerHTML = `
 <img src = "${personaje.image}" image:>
 <strong > id: </strong> ${personaje.id}
 <strong > name: </strong> ${personaje.name}
 <strong > status: </strong> ${personaje.status}
 <strong > especie: </strong> ${personaje.species}
  ` ;
  pokemonList.appendChild(element);
}
async function getPokemon (numero){
try{
    
        const response = await fetch(`https://rickandmortyapi.com/api/character/${numero}`)
        if (response.status === 404){
            alert("personaje not found");
            return
        }
        return await  response.json(); 
        
} catch(err){
    alert("Mala conexion viejo intentalo de nuevo");
}
}