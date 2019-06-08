import axios from 'axios';

// Create an instance of axios with custom configuration
export default axios.create({
    baseURL: 'https://api.alquran.cloud'
})