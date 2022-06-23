const navClasses = document
        .getElementById('nav') 
        .classList; 

function toggleNav () {
    navClasses.toggle('show'); 
}

function closeNav () {
   navClasses.remove('show'); 
}

window.addEventListener('load', () => {
    const navItems = Array.from(document
        .querySelectorAll('.nav__item a')); 

    navItems.forEach(function (navItem) {
        navItem.addEventListener('click', closeNav); 
    });

    document
        .getElementById('navOpen') 
        .addEventListener('click', toggleNav); 

    document
        .getElementById('navClose') 
        .addEventListener('click', toggleNav); 
});