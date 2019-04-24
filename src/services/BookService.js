import api from '../config/api';


const BOOKS_ENDPOINT = '/books';

export default {
    getBooks: () => api.get(BOOKS_ENDPOINT)
};

