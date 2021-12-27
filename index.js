const botao = document.querySelector('.menu');
const btMenu = document.querySelector('.menu__botao');

const listaMenu = document.querySelector('.cabecalho__menu');

function abrirMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    btMenu.classList.toggle('menu__botao-ativo');
    listaMenu.classList.toggle('menu-ativo');

    const menuAtivo = btMenu.classList.contains('menu__botao-ativo');
    event.currentTarget.setAttribute('aria-expanded', menuAtivo);
    if(menuAtivo){
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
    
}

botao.addEventListener('click', abrirMenu);
botao.addEventListener('touchstart', abrirMenu);



