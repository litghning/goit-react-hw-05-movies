import axios from "axios";



const API = '29c8e24a978eb6b6f8da96b3b7fb6dd0';
const BACKEND = 'https://api.themoviedb.org/3/'

export const findTrandingMovies = async () => {
return await axios
.get(`${BACKEND}trending/movie/week?api_key=${API}`)


.then(res  => res.data.results)
};

export const findMoviesSearch = async query => {
    return await axios
    .get(`${BACKEND}search/movie?api_key=${API}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(res =>res.data.results)
};

export const getMoviesDetails = async id => {
    return await  axios 
    .get(`${BACKEND}movie/${id}?api_key=${API}&language=en-US`)
    .then (res => res.data)
};

export const getMovieActors = async id => {
    return await axios
    .get(`${BACKEND}movie/${id}/credits?api_key=${API}&language=en-US`)
    .then(res => res.data.cast)
};
export const getMoviesReviews = async id => {
    return await axios 
    .get(`${BACKEND}movie/${id}/reviews?api_key=${API}&language=en-US&page=1`)
    .then (res => res.data.results)
};