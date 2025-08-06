import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

export default function Home() {
  // useState
  const [searchQuery, setSearchQuery] = useState(""); // Search Bar
  const [movies, setMovies] = useState([]); // API
  const [error, setError] = useState<string | null>(null); // Error
  const [loading, setLoading] = useState(true); // Loading

  //useEffect
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent refresh when submit
    if (!searchQuery.trim()) return 
    if (loading) return

    setLoading(true) 
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.log(err)
        setError("Failed to search movies...");
    }finally {
      setLoading(false)
    }

    setSearchQuery("");
    // alert(searchQuery);
  };

  return (
    // Search Bar Section and Result Section
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Input useState format
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

// Looping through array to render components
// {list.map((item, index) => (
//   <Component propName={item} key={index} />
// ))}
