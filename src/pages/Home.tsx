import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";


export default function Home() {
  // useState (Search Bar)
  const [searchQuery, setSearchQuery] = useState("");
  
  const movies = [
    { id: 1, title: "Movie 1", release_date: "2021" },
    { id: 2, title: "Movie 2", release_date: "2022" },
    { id: 3, title: "Movie 3", release_date: "2023" },
    { id: 4, title: "Movie 4", release_date: "2024" },
    { id: 5, title: "Movie 5", release_date: "2025" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // prevent refresh when submit
    alert(searchQuery);
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

      <div className="movies-grid">
        {movies.map(
          (movie, index) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={index} />
            )
        )}
      </div>
    </div>
  );
}

// Looping through array to render components
// {list.map((item, index) => (
//   <Component propName={item} key={index} />
// ))}
