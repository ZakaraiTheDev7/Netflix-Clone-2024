import React, { useState, useEffect } from 'react';
import instance from '../../utils/axios'; // Fixed typo
import requests from '../../utils/requests'; // Fixed typo

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.actionMovies);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover", // Fixed style property
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        {/* Uncomment or define the truncate function if needed */}
        {/* <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1> */}
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
