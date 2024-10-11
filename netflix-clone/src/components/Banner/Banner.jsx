import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../../utils/requests'; // Assuming axios instance is configured in requests
import './banner.css';


function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchTrending);
        console.log("Full API Response:", request.data);
        // Check if request.data.results exists and is an array
        if (request.data && request.data.results && request.data.results.length > 0) {
          const selectedMovie = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
          setMovie(selectedMovie);
          console.log(selectedMovie); // Log the full movie object for debugging
        } else {
          console.log("No movies found in the response.");
        }
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    };
    fetchData();
  }, []);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + '...' :str
  }

  // Generate the movie backdrop URL or fallback to a placeholder
  const movieBackdrop = movie?.backdrop_path 
    ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` 
    : 'url(/path-to-your-placeholder-image.jpg)'; // Ensure this image exists in public folder

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movieBackdrop,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button list">My List</button>
        </div>

        {/* Uncomment or define the truncate function if needed */}
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
