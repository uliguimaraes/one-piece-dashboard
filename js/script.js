// 1. Alternar Tema (Claro / Escuro)
const btnTema = document.getElementById('toggle-theme');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Funcionalidade A: Contador Interativo
let contador = 0;

const contadorValor = document.getElementById('contador-valor');
const passoInput = document.getElementById('passo-input');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');


function obterPassoValido() {
    const passo = parseInt(passoInput.value);
    // Regra: Se estiver vazio, for inválido (NaN) ou <= 0, o padrão é 1
    return (isNaN(passo) || passo <= 0) ? 1 : passo;
}

// Evento de Incrementar (+)
btnIncrementar.addEventListener('click', () => {
    const passo = obterPassoValido();
    contador += passo;
    contadorValor.textContent = contador;
});

// Evento de Decrementar (-)
btnDecrementar.addEventListener('click', () => {
    const passo = obterPassoValido();
    contador -= passo;
    contadorValor.textContent = contador;
});


// Array com imagens oficiais dos personagens de One Piece
const imagens = [
    'img/luffy.jpg',
    'img/zoro.jpg',
    'img/nami.jpg',
    'img/usopp.jpg',
    'img/sanji.jpg',
    'img/chopper.jpg',
    'img/robin.jpg',
    'img/franky.jpg',
    'img/brook.jpg',
    'img/jinbe.jpg'
];
const imgDestaque = document.getElementById('imagem-destaque');
const containerMiniaturas = document.getElementById('miniaturas-container');

// Define a primeira imagem no destaque inicial
if (imgDestaque && imagens.length > 0) {
    imgDestaque.src = imagens[0];
}

// Cria as miniaturas dinamicamente
imagens.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('miniatura');
    img.alt = `Miniatura ${index + 1}`;
    
    if (index === 0) img.classList.add('ativa');

    img.addEventListener('click', () => {
        imgDestaque.src = url;
        document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('ativa'));
        img.classList.add('ativa');
    });

    containerMiniaturas.appendChild(img);
});