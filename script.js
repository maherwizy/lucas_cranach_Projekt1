var 
    wrapper = document.querySelector('.wrapper'),
    filterButton = document.querySelector('.filter-button'),
    popUp = document.querySelector('.filter-pop-up'),
    searchButton = document.querySelector('.search-button'),
    ergebniseList = document.querySelector('.ergebnise-list'),
    home = document.querySelector('.home');

filterButton.addEventListener('click', function() {
    popUp.classList.toggle('pop-up-hidden');
});

searchButton.addEventListener('click', function() {
    popUp.classList.toggle('pop-up-hidden', true);
    wrapper.classList.toggle('search', true);
});

home.addEventListener('click', function() {
    wrapper.classList.toggle('search', false);
});