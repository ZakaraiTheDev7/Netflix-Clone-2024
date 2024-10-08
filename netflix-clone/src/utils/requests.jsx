// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;
 const requests ={
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    tvShows: `/discover/tv?api_key=${API_KEY}`,
    actionTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`



}
export default requests;
