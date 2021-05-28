import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -ZLQENl6rxPC6DFquJxh8Tp6CFOp78zpISvtexeNO8k'
    }
});
