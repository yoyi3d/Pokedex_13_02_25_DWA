$(document).ready(function(){
    // Array donde se irán guardando los pokemon de forma ordenada por ID
    let sortedPokemon = [];





    // Primera llamada a la API para conseguir el listado.
    fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
        
        .then(function (response) {
            return response.json();

        })
        .then(function (result) {
            // console.log(result);
            let pokemonList = result.results;

            // Lanzamos una nueva petición a la API por cada pokemon del primer listado que hemos recibido
            pokemonList.forEach(function (pokemon){
                fetchAndSortPokemon(pokemon);

            });

        })
        .catch(function(err) {
            console.log(err);
           
        });
        

        // Función que pide a la API los datos de un Pokémon y los va ordenando en un array
        function fetchAndSortPokemon(pokemon){
            
            let urlPokemon = pokemon.url;
            // console.log(urlPokemon);

            // Con esta llamada pedimos los detalles de cada Pokemon

            fetch(urlPokemon)
                .then(function (response) {
                    return response.json();

                })

                .then(function(pokemonDetails) {
                    console.log(pokemonDetails);

                    // Insertamos el pokemon con sus datos en el array sortedPokemon
                    sortedPokemon.push(pokemonDetails);
                    sortedPokemon.sort(function (a,b){
                        return a.id - b.id; // Ordenar por ID en orden ascendente
                        
                    });

                    //llamamos a la función para renderizar el HTML de cada card
                    renderPokemonCard();

                })

                .catch(function (err) {
                    console.log(err);
                    
                });
        }

        // Función para renderizar los datos de cada pokemon en un card de BS
        // Esta funcion recorrerá el array sortedPokemon


        function renderPokemonCard() {
            $("#pokeCont").empty();

            sortedPokemon.forEach(function (pokemonDetails){
                let nameCap = pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1);

                if (nameCap === "Nidoran-f" || nameCap === "Nidoran-m"){ 
                    nameCap = "Nidoran";
                }
                
                // si pokemonDetails.name = nidoran-f 
1
                        
                let pokeHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${pokemonDetails.sprites.front_shiny}" class="card-img-top" alt="...">
                        <div class="card-body d-felx justify-content-center">
                            <h5 class="card-title d-flex justify-content-center">${nameCap}</h5>
                            <p class="card-text text-center">${pokemonDetails.id}</p>
                            <a href="https://www.wikidex.net/wiki/${nameCap}" target="_blank" class="btn btn-primary d-flex justify-content-center">Wiki Data</a>
                        </div>
                    </div>
                `;
    
                $("#pokeCont").append(pokeHTML);
            });
            
            
        }



































        // Funcion que se encarga de pedir los datos de cada Pokemon

        // function fetchPokemonDetails(pokemon){
        //     let urlPokemon = pokemon.url;
        //     // console.log(urlPokemon);

        //     // Con esta llamada pedimos los detalles de cada Pokemon

        //     fetch(urlPokemon)
        //         .then(function (response) {
        //             return response.json();

        //         })

        //         .then(function(pokemonDetails) {
        //             console.log(pokemonDetails);

        //             let nameCap = pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1);
                    
        //             let pokeHTML = `
        //             <div class="card" style="width: 18rem;">
        //                 <img src="${pokemonDetails.sprites.front_shiny}" class="card-img-top" alt="...">
        //                 <div class="card-body d-felx justify-content-center">
        //                     <h5 class="card-title d-flex justify-content-center">${nameCap}</h5>
        //                     <p class="card-text text-center">${pokemonDetails.id}</p>
        //                     <a href="https://www.wikidex.net/wiki/${nameCap}" target="_blank" class="btn btn-primary d-flex justify-content-center">Wiki Data</a>
        //                 </div>
        //             </div>
        //             `;
        //             $("#pokeCont").append(pokeHTML);
                    

        //         })

        //         .catch(function (err) {
        //             console.log(err);
                    
        //         });

        // }       

});