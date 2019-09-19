import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 75394a974ccd392104ed0c56a58454f3348fc8d81b7dc7c8bd3d41a7e26b34be'
    }
});