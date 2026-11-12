(function menuDropdown() {
    const botao = document.querySelector('.header-menu-btn');
    const menu = document.getElementById('menu-dropdown');
    if (!botao || !menu) return;

    function abrir(aberto) {
        menu.classList.toggle('aberto', aberto);
        botao.setAttribute('aria-expanded', String(aberto));
        botao.classList.toggle('bi-list', !aberto);
        botao.classList.toggle('bi-x-lg', aberto);
    }

    botao.addEventListener('click', function (e) {
        e.stopPropagation();
        abrir(!menu.classList.contains('aberto'));
    });

    menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) abrir(false);
    });

    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) abrir(false);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') abrir(false);
    });
})();

(function carrosselHero() {
    const slides = document.querySelectorAll('.hero-slide');
    const barras = document.querySelectorAll('.hero-indicador button');
    const duracao = 5000;
    let atual = 0;
    let timer;
    if (slides.length < 2 || slides.length !== barras.length) return;

    function mostrar(i) {
        slides[atual].classList.remove('ativo');
        barras[atual].classList.remove('ativo');
        atual = i;
        slides[atual].classList.add('ativo');
        barras[atual].classList.add('ativo');
    }

    function iniciar() {
        clearInterval(timer);
        timer = setInterval(function () {
            mostrar((atual + 1) % slides.length);
        }, duracao);
    }

    barras.forEach(function (barra, i) {
        barra.addEventListener('click', function () {
            if (i === atual) return;
            mostrar(i);
            iniciar();
        });
    });

    iniciar();
})();