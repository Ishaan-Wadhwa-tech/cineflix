// import React from 'react'

const MovieCard = ({movie}) => {
    function onFavClick(){
        alert("Fav clicked");
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt="" />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h3>{movie.release_info}</h3>
        </div>
    </div>
  )
}

export default MovieCard