const botaoCaptura = document.querySelector('.botao-captura');

botaoCaptura.addEventListener('click', () => {

    botaoCaptura.style.transform = 'scale(0.9)';

    setTimeout(() => {

        botaoCaptura.style.transform = 'scale(1)';

    }, 150);

    alert('Foto capturada com Smart Sense AI');

});