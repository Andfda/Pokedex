const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
pokemon.addEventListener('click',()=>{
const cartaoPokemonAberto = document.querySelector ('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

  const idPokemonSelecinonado = pokemon.attributes.id.value
  const idDiCartaoPokemonParaAbrir= 'cartao-' + idPokemonSelecinonado
  const cartaoPokemonParaAbrir = document.getElementById (idDiCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
  
  const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove ('ativo')
  const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecinonado)
        pokemonSelecionadoNaListagem.classList.add ('ativo')
     

})
})

     
        
   