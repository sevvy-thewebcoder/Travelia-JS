// PRE-LOADER

const preLoader = document.querySelector( '[data-preloader]' );

window.addEventListener( 'load', () => {
    preLoader.classList.add( 'remove' );
} );