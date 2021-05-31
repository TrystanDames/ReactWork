import axios from 'axios';

const KEY = 'AIzaSyAdULY9o4-rhtBtUYD6df_tST9a6FUKgrg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY   
    }
});