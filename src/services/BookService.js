import api from '../config/api';


const ENDPOINT = '/books';

export default {
    getBooks: () => api.get(ENDPOINT)
};

