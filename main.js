const parallaxField = document.querySelector('.parallax');
const parallaxLayers = parallaxField.querySelectorAll('.parallax__layer');

const parallax = (event) => {
    const parallaxHeight = parallaxField.offsetHeight;
    const parallaxWidth = parallaxField.offsetWidth;

    const coordX = event.clientX - parallaxWidth / 2;
    const coordY = event.clientY - parallaxHeight / 2;

    parallaxLayers.forEach(layer => {
        const ratio = layer.dataset.speed
        const x = (coordX * ratio).toFixed(1)
        const y = (coordY * ratio).toFixed(1)

        layer.setAttribute('style', `transform: translate(${x}px,${y}px)`)
    })
}


const stopParallax = (event) => {
    parallaxLayers.forEach(layer => {
        layer.removeAttribute('style')
    })
}


parallaxField.addEventListener('mousemove', parallax);
parallaxField.addEventListener('mouseleave', stopParallax);


