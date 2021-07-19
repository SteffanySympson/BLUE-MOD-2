const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');


elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/image/kero.jpg' 
        elementoNome.innerText = 'Kero' 
        elementoSituacao.innerText = 'Ursinho Alado Fofo e Orientador Mágico' 
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/image/kerberos.jpg'  
        elementoNome.innerText = 'Kerberos'
        elementoSituacao.innerText = 'Guardião das Cartas do Sol'
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = './assets/image/livro clow.png' 
        elementoNome.innerText = 'Guardião do Lacre'
        elementoSituacao.innerText = 'Apenas um desenho'
        elementoBtn.value = 'primeiro'
    }
})


