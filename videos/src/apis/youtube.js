import axios from 'axios';

const KEY = 'AIzaSyBiBCkqIo4Wfv-9p5WoLanDvHn0_lYStVo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});



