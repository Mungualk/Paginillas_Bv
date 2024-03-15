const toilet = document.querySelector('.search-bar-container');
const magnifierEl = document.querySelector('.magnifier');

magnifierEl.addEventListener('click', () => {
    toilet.classList.toggle("active");
});