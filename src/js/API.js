import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { hideLoadButtons } from '../index'
const axios = require('axios').default;
const BASE_URL_KEY = 'https://pixabay.com/api/?key=24773665-69599298287e5482cf3fdda29';


const options = {
    image_type: 'image_type=photo',
    orientation: 'orientation=horizontal',
    safesearch: 'safesearch=true',
    language: 'language=en',
    per_page: '40'
}

// key - твой уникальный ключ доступа к API.
// q - термин для поиска.То, что будет вводить пользователь.
// image_type - тип изображения.Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии.Задай значение horizontal.
// safesearch - фильтр по возрасту.Задай значение true.

export default class APIsearch {
    constructor() {
        this.shearchQuery = '';
        this.page = 1;
    }
    async fetchPictures() {
        try {
            const url = `${BASE_URL_KEY}&q=${this.shearchQuery}&${this.language}&${options.image_type}
            &${options.orientation}&${options.safesearch}&page=${this.page}&per_page=${options.per_page}`;
            console.log(url);
            const fetchPictures = (await axios.get(`${url}`)).data
            console.log(fetchPictures);
            console.log('current page', this.page);
            this.incrementPages()
            console.log('incremented page', this.page);
            return fetchPictures
        } catch (e) {
            if (e.toJSON().message === 'Request failed with status code 400') {
                Notify.warning(`We're sorry, but you've reached the end of search results.`);
                hideLoadButtons()
                window.removeEventListener('scroll')
                return
            }
        }
    }
    get query() {
        return this.shearchQuery
    }
    set query(value) {
        this.shearchQuery = value
    }
    incrementPages() {
        return this.page += 1
    }
    resetPages() {
        return this.page = 1
    }
}
