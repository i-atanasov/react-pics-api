import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',    
    headers: {
        Authorization: 'Client-ID DeaWuvqM9eoTKtiJWnXf1_SpPOUxqmVs9tIJVGYeIwU'
    }   

});