import axios from 'axios';

// Create an instance of axios with custom configuration
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 097210832429e7da45cad1bd575e64f6150111cf1c7a61035ae70f16a6f826b5'
    }
})