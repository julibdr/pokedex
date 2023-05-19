const btnCargar = document.querySelector("#btn-cargar");
const ul = document.querySelector("#lista");
const button = document.querySelector("#btn-detalle");

btnCargar.addEventListener("click", function () {
  const endPoint = "https://pokeapi.co/api/v2/pokemon?limit=100";
  fetch(endPoint)
    .then((response) => response.json())
    .then((json) => {
      const pokemons = json.results;
      ul.innerHTML = "";
      pokemons.forEach((pokemon) => {
        const urlP = pokemon.url;
        fetch(urlP)
          .then((response) => response.json())
          .then((datosP) => {
            const nameP = datosP.name;
            const imgP = datosP.sprites.front_default;
            const idP = datosP.id;
            const html = `
              <div class="card" style="width: 18rem;">
                <img src="${imgP}" class="card-img-top" alt="${nameP}">
                <div class="card-body">
                  <h5 class="card-title">${nameP}</h5>
                <a class="btnD" href="detalle.html?id=${idP}">Ver detalle</a>
                </div>
              </div>`;
            ul.innerHTML += html;
          });
      });
    })
    .catch((error) => {
      console.error(error);
    });
    
});


