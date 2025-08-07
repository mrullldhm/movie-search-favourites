import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/useMovieContext";
import "../css/Favourites.css";

export default function Favourite() {
  const { favourites } = useMovieContext();

  if (favourites) {
     return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourite Movie Yet</h2>
      <p>Start adding movies to your favourites</p>
    </div>
  );
}
