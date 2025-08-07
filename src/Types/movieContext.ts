import type { Movie } from "./movie";

export type MovieContextType = {
  favourites: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFromFavourites: (movieId: number) => void;
  isFavourite: (movieId: number) => boolean;
};
