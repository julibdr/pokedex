const parametros = new URLSearchParams(window.location.search);
const idP = parametros.get('id');
const div = document.getElementById('detalles');
const atras = document.getElementById('atras');
console.log(idP);

const endPoint = `https://pokeapi.co/api/v2/pokemon/${idP}`;
fetch(endPoint)
  .then((response) => response.json())
  .then((pokemon) => {
    const nameP = pokemon.name;
    const imgP = pokemon.sprites.front_default;
    const hp = pokemon.stats[0].base_stat;
    const ataque = pokemon.stats[1].base_stat;
    const defensa = pokemon.stats[2].base_stat;
    const especies = pokemon.species.name;
    const experiencia = pokemon.base_experience;
  
    div.innerHTML = `
      <div class="card row">
        <img src="${imgP}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nameP}</h5>
          <p class="card-text">Hp: ${hp}</p>
          <p class="card-text">Ataque: ${ataque}</p>
          <p class="card-text">Defensa: ${defensa}</p>
          <p class="card-text">Especie: ${especies}</p>
          <p class="card-text">Experiencia base: ${experiencia}</p>

          <a class="atras" href="index.html?id=${idP}">atrás</a>
        </div>
      </div>`;
  })
  .catch((error) => console.error(error));
  