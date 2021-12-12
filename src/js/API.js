const axios = require('axios').default;
const BASE_URL_KEY = 'https://pixabay.com/api/?key=24773665-69599298287e5482cf3fdda29';


const options = {
    image_type: 'image_type=photo',
    orientation: 'orientation=horizontal',
    safesearch: 'safesearch=true',
    language: 'language=en'
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
        const url = `${BASE_URL_KEY}&q=${this.shearchQuery}&${this.language}&${options.image_type}
        &${options.orientation}&${options.safesearch}`;

        const fetchPictures = (await axios.get(`${url}`)).data
        console.log(fetchPictures);
        return fetchPictures
    }
    get query() {
        return this.shearchQuery
    }
    set query(value) {
        this.shearchQuery = value
    }
}
