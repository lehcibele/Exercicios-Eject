
/*MENU MOBILE */
let menuIcon = document.getElementById('menu-icon');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

menuIcon.addEventListener('click', () => {
    if(menuMobile.classList.contains('abrir-menu')){
        menuMobile.classList.remove('abrir-menu');
    } else {
        menuMobile.classList.add('abrir-menu');
    }
})

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
})

/*CARROSEL */

var radio = document.querySelector('.manual-btn');
var cont = 1;

/*Deixa selecionado a primeira imagem quando a página é carregada */
document.getElementById('radio1').checked = true;

/*Tempo em que as imagens vão ficar a amostra, a função setInterval serve para determinar o tempo em que uma imagem fica e depois outra imagem aparece 1000 = 1s*/
setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    /*Verificador para saber em qual imagem está */
    cont++;

    if(cont > 3){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked = true;
}