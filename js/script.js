const trilho = document.querySelector('.carrossel-trilho');
const slides = document.querySelectorAll('.slide');
const setaEsq = document.querySelector('.seta-esq');
const setaDir = document.querySelector('.seta-dir');
const areaBolinhas = document.querySelector('.bolinhas');

let atual = 0;

// cria uma bolinha pra cada slide
slides.forEach((slide, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'bolinha';
    b.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
    b.addEventListener('click', () => irPara(i));
    areaBolinhas.appendChild(b);
});

const bolinhas = document.querySelectorAll('.bolinha');

function irPara(indice) {
    // volta pro começo/fim quando passa do limite
    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;

    atual = indice;
    trilho.style.transform = 'translateX(-' + (atual * 100) + '%)';

    bolinhas.forEach((b, i) => {
        b.classList.toggle('ativa', i === atual);
    });
}

setaEsq.addEventListener('click', () => irPara(atual - 1));
setaDir.addEventListener('click', () => irPara(atual + 1));

irPara(0); // começa no primeiro slide