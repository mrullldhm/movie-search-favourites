import { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";
import type { Movie } from "../Types/movie";
import type { MovieContextType } from "../Types/movieContext";

type MovieProviderProps = {
  children: React.ReactNode;
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie: Movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieId: number) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId: number) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value: MovieContextType = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
