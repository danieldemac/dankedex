const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const pokemonType = document.querySelector('.pokemon__type');
const pokemonSecType = document.querySelector('.pokemon__sectype');




const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'; 
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['front_default'];
    pokemonTipo1 = data['types'][0]['type']['name'];
    

  
    if (data['types'].length === 1){
      //TIPO1
    console.log(pokemonTipo1);
    if(data['types'][0]['type']['name'] === 'grass'){
      pokemonType.src ='images/Types/Grass.png';
    } else if (data['types'][0]['type']['name'] === 'fire') {
      pokemonType.src ='images/Types/Fire.png';
    } else if (data['types'][0]['type']['name'] === 'water') {
      pokemonType.src ='images/Types/Water.png';
    } else if (data['types'][0]['type']['name'] === 'bug') {
      pokemonType.src ='images/Types/Bug.png';
    } else if (data['types'][0]['type']['name'] === 'dark') {
      pokemonType.src ='images/Types/Dark.png';
    } else if (data['types'][0]['type']['name'] === 'dragon') {
      pokemonType.src ='images/Types/Dragon.png';
    } else if (data['types'][0]['type']['name'] === 'electric') {
      pokemonType.src ='images/Types/Electric.png';
    } else if (data['types'][0]['type']['name'] === 'fairy') {
      pokemonType.src ='images/Types/Fairy.png';
    } else if (data['types'][0]['type']['name'] === 'fighting') {
      pokemonType.src ='images/Types/Fighting.png';
    } else if (data['types'][0]['type']['name'] === 'flying') {
      pokemonType.src ='images/Types/Flying.png';
    } else if (data['types'][0]['type']['name'] === 'ghost') {
      pokemonType.src ='images/Types/Ghost.png';
    } else if (data['types'][0]['type']['name'] === 'ground') {
      pokemonType.src ='images/Types/Ground.png';
    } else if (data['types'][0]['type']['name'] === 'ice') {
      pokemonType.src ='images/Types/Ice.png';
    } else if (data['types'][0]['type']['name'] === 'normal') {
      pokemonType.src ='images/Types/Normal.png';
    } else if (data['types'][0]['type']['name'] === 'poison') {
      pokemonType.src ='images/Types/Poison.png';
    } else if (data['types'][0]['type']['name'] === 'psychic') {
      pokemonType.src ='images/Types/Psychic.png';
    } else if (data['types'][0]['type']['name'] === 'rock') {
      pokemonType.src ='images/Types/Rock.png';
    } else if (data['types'][0]['type']['name'] === 'steel') {
      pokemonType.src ='images/Types/Steel.png';
    } 
    else{
      pokemonType.src ='images/Types/Nadia.png';

    }
    }
    
    if (data['types'].length > 1){

      //TIPO1
    console.log(pokemonTipo1);
    if(data['types'][0]['type']['name'] === 'grass'){
      pokemonType.src ='images/Types/Grass.png';
    } else if (data['types'][0]['type']['name'] === 'fire') {
      pokemonType.src ='images/Types/Fire.png';
    } else if (data['types'][0]['type']['name'] === 'water') {
      pokemonType.src ='images/Types/Water.png';
    } else if (data['types'][0]['type']['name'] === 'bug') {
      pokemonType.src ='images/Types/Bug.png';
    } else if (data['types'][0]['type']['name'] === 'dark') {
      pokemonType.src ='images/Types/Dark.png';
    } else if (data['types'][0]['type']['name'] === 'dragon') {
      pokemonType.src ='images/Types/Dragon.png';
    } else if (data['types'][0]['type']['name'] === 'electric') {
      pokemonType.src ='images/Types/Electric.png';
    } else if (data['types'][0]['type']['name'] === 'fairy') {
      pokemonType.src ='images/Types/Fairy.png';
    } else if (data['types'][0]['type']['name'] === 'fighting') {
      pokemonType.src ='images/Types/Fighting.png';
    } else if (data['types'][0]['type']['name'] === 'flying') {
      pokemonType.src ='images/Types/Flying.png';
    } else if (data['types'][0]['type']['name'] === 'ghost') {
      pokemonType.src ='images/Types/Ghost.png';
    } else if (data['types'][0]['type']['name'] === 'ground') {
      pokemonType.src ='images/Types/Ground.png';
    } else if (data['types'][0]['type']['name'] === 'ice') {
      pokemonType.src ='images/Types/Ice.png';
    } else if (data['types'][0]['type']['name'] === 'normal') {
      pokemonType.src ='images/Types/Normal.png';
    } else if (data['types'][0]['type']['name'] === 'poison') {
      pokemonType.src ='images/Types/Poison.png';
    } else if (data['types'][0]['type']['name'] === 'psychic') {
      pokemonType.src ='images/Types/Psychic.png';
    } else if (data['types'][0]['type']['name'] === 'rock') {
      pokemonType.src ='images/Types/Rock.png';
    } else if (data['types'][0]['type']['name'] === 'steel') {
      pokemonType.src ='images/Types/Steel.png';
    } 
    
      pokemonTipo2 = data['types'][1]['type']['name'];
      console.log(pokemonTipo2);
      //TIPO2
      if(data['types'][1]['type']['name'] === 'grass'){
        pokemonSecType.src ='images/Types/Grass.png';
      } else if (data['types'][1]['type']['name'] === 'fire') {
        pokemonSecType.src ='images/Types/Fire.png';
      } else if (data['types'][1]['type']['name'] === 'water') {
        pokemonSecType.src ='images/Types/Water.png';
      } else if (data['types'][1]['type']['name'] === 'bug') {
        pokemonSecType.src ='images/Types/Bug.png';
      } else if (data['types'][1]['type']['name'] === 'dark') {
        pokemonSecType.src ='images/Types/Dark.png';
      } else if (data['types'][1]['type']['name'] === 'dragon') {
        pokemonSecType.src ='images/Types/Dragon.png';
      } else if (data['types'][1]['type']['name'] === 'electric') {
        pokemonSecType.src ='images/Types/Electric.png';
      } else if (data['types'][1]['type']['name'] === 'fairy') {
        pokemonSecType.src ='images/Types/Fairy.png';
      } else if (data['types'][1]['type']['name'] === 'fighting') {
        pokemonSecType.src ='images/Types/Fighting.png';
      } else if (data['types'][1]['type']['name'] === 'flying') {
        pokemonSecType.src ='images/Types/Flying.png';
      } else if (data['types'][1]['type']['name'] === 'ghost') {
        pokemonSecType.src ='images/Types/Ghost.png';
      } else if (data['types'][1]['type']['name'] === 'ground') {
        pokemonSecType.src ='images/Types/Ground.png';
      } else if (data['types'][1]['type']['name'] === 'ice') {
        pokemonSecType.src ='images/Types/Ice.png';
      } else if (data['types'][1]['type']['name'] === 'normal') {
        pokemonSecType.src ='images/Types/Normal.png';
      } else if (data['types'][1]['type']['name'] === 'poison') {
        pokemonSecType.src ='images/Types/Poison.png';
      } else if (data['types'][1]['type']['name'] === 'psychic') {
        pokemonSecType.src ='images/Types/Psychic.png';
      } else if (data['types'][1]['type']['name'] === 'rock') {
        pokemonSecType.src ='images/Types/Rock.png';
      } else if (data['types'][1]['type']['name'] === 'steel') {
        pokemonSecType.src ='images/Types/Steel.png';
      }
    } else {
      pokemonSecType.src ='images/Types/Nadia.png';
    }
    

    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.src ='images/missingno.png';
    pokemonName.innerHTML = 'MissingNo';
    pokemonNumber.innerHTML = 'ERROR';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
