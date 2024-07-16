import axios from 'axios';
import { BiMovie } from 'react-icons/bi';

// Define the base URL and API key
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '0fae8cdb0aaa5306ef8bec98a99a070e';
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=0fae8cdb0aaa5306ef8bec98a99a070e';


// Use the base URL directly without 'this'
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreTd = (id) => axios.get(movieByGenreBaseURL + "&with_genres="+id) 

// Export the function
export default {
    getTrendingVideos,
    getMovieByGenreTd
};
