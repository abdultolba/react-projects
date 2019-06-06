import axios from 'axios';

// Create an instance of axios with custom configuration
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID a69d34f60821c5d5f5a80f74ecfb88b4473486e16485802dd8c9294f2217265b'
    }
})