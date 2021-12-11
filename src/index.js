import './sass/main.scss';
import API from './js/API'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    form: document.querySelector('#search-form'),
    input: document.querySelector('input[name="searchQuery"]'),
    button: document.querySelector('button')
}
// console.log(refs.input);


refs.button.addEventListener('click', onClick)

function onClick(e) {
    e.preventDefault()
    const userInput = refs.input.value
    if (!userInput) {
        return
    }
    console.log(userInput);
}
