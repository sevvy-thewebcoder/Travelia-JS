// PRE-LOADER

const preLoader = document.querySelector( '[data-preloader]' );
const navLinks = document.querySelectorAll('.nav__link' )
const toggleBtn = document.querySelector('[data-nav-toggler]')
const navbarMobile = document.querySelector('[data-navbar-mobile]')

window.addEventListener( 'load', () => {
    preLoader.classList.add( 'remove' );
} );

const headerHeight = document.querySelector('[data-header]').clientHeight

// document.querySelector('[data-navbar-mobile]').style.minHeight = `calc(100dvh - ${headerHeight}px)`
document.querySelector( '[data-navbar-mobile]' ).style.cssText += `
    min-height : calc(100dvh - ${headerHeight}px);
`
console.log( headerHeight );

for ( let i = 0; i < navLinks.length; i++) {

let abc = navLinks[ i ].getAttribute( "href" )

navLinks[ i ].addEventListener( 'click', function () {
    
    navLinks.forEach( item => (
        item.parentElement.classList.remove("active__link")
        ))
        console.log(navLinks[i].getAttribute("href"))
        navLinks[i].parentElement.classList.add("active__link")
    })
}

let isMenuActive = false;

function autoCloseNavbar () {
    isMenuActive = false;
    navbarMobile.style.cssText += `
    top : -100dvh;
    `
    document.querySelector('button > ion-icon').setAttribute("name", "grid-outline")
}

toggleBtn.addEventListener( 'click', function () {

    isMenuActive = !isMenuActive

    if (isMenuActive) {
        
        navLinks.forEach( item => {
            item.addEventListener("click", autoCloseNavbar)
        })
        document.querySelector('button > ion-icon').setAttribute("name", "close-outline")
        navbarMobile.style.cssText += `
            top : ${headerHeight}px;

        ` 

    } else {
        
        document.querySelector('button > ion-icon').setAttribute("name", "grid-outline")
        navbarMobile.style.cssText += `
            top : -100dvh;
        ` 

    }
    console.log(isMenuActive)

})