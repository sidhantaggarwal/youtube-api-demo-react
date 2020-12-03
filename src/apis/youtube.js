import axios from 'axios';
const KEY = 'AIzaSyCnU3_QDuHNin0VQhmo9nhiBb8r-f-bwAc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});