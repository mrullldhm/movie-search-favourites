import "../css/MovieCard.css";

interface MovieCardProps {
  movie: {
    url: string;
    title: string;
    release_date: string;
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
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
