const personagens = document.querySelectorAll('.personagem'); 


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450){
            window.scrollTo({top: 0 , behavior: 'smooth'});
        }
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const idPersonagem = personagem.attributes.id.value;
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        imagemPersonagemGrande.src = `./images/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descPersonagem = document.getElementById('descricao-personagem');
        descPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

