import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer'; 
import YouTube from 'react-youtube';

const Row = ({ title, fectURL, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const Base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fectURL);
        const request = await axios.get(fectURL);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [fectURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title) // Corrected original_row typo
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log('Trailer not found', error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            // key={movie.id}
            onClick={() => handleClick(movie)} // Fixed the onClick event
            key={index}    src={`${Base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name || movie.title} className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} {/* Renders trailer if available */}
    </div>
  );
};

export default Row;
