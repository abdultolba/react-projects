import axios from 'axios';

const KEY = 'AIzaSyDKRCZZ16U3uULA5Gnde9uV_rRE8V0Ai5A';
// Create an instance of axios with custom configuration
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});