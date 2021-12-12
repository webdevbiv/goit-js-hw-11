import './sass/main.scss';
import APIsearch from './js/API';
import pictureCardTpl from './templates/pictureCardTpl.hbs'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
    form: document.querySelector('#search-form'),
    input: document.querySelector('input[name="searchQuery"]'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery')
}
// console.log(refs.input);
const userSearch = new APIsearch();
let currentSearchInput = '';


// refs.button.addEventListener('click', onClick)
refs.form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    const userInput = e.currentTarget.elements.searchQuery.value

    if (!userInput) {
        return
    }
    if (currentSearchInput === userInput) {
        return
    }

    console.log('this is userInput from index:', userInput);
    clearAdjacentHTML()

    currentSearchInput = userInput
    userSearch.query = userInput
    userSearch.fetchPictures().then(emptySearchResult).then(SearchResult)
}

function emptySearchResult(fetchPictures) {
    if (fetchPictures.totalHits === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
    return fetchPictures
}
function SearchResult(fetchPictures) {
    console.log('we are here', fetchPictures);
    if (fetchPictures.totalHits > 0) {
        successMessage(fetchPictures)
        createMarkup(fetchPictures, refs.gallery, pictureCardTpl)
    }
}

function successMessage(fetchPictures) {
    Notify.success(`Hooray! We found ${fetchPictures.totalHits} images.`);
}

function createMarkup(fetchPictures, element, template) {
    element.insertAdjacentHTML('beforeend', template(fetchPictures))
}

function clearAdjacentHTML() {
    refs.gallery.innerHTML = ''
}

