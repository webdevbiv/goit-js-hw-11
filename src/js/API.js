const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24773665-69599298287e5482cf3fdda29'

const searchOptions = {
    image_type: 'image_type=photo',
    orientation: 'orientation=horizontal',
    safesearch: 'safesearch=true'
}

// key - твой уникальный ключ доступа к API.
// q - термин для поиска.То, что будет вводить пользователь.
// image_type - тип изображения.Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии.Задай значение horizontal.
// safesearch - фильтр по возрасту.Задай значение true.


