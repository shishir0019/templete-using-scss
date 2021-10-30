const header = document.querySelector('header');

document.addEventListener('scroll', (event) => {
    const isTop = window.scrollY === 0;
    if(!isTop) header.classList.add("shadow-lg")
    else header.classList.remove("shadow-lg")
})