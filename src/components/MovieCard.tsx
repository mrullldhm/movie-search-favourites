import "../css/MovieCard.css";

interface MovieCardProps {
  movie: {
    title: string;
    release_date: string;
    poster_path: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const onFavouriteClick = () => {
    alert("clicked");
  };

  // Movie Card Section
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
