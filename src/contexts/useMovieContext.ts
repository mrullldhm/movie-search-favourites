import { useContext } from "react";
import { MovieContext } from "./MovieContext"; // Update if not exported yet

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
