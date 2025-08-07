import { createContext } from "react";
import type { MovieContextType } from "../Types/movieContext";

// Export only the context here
export const MovieContext = createContext<MovieContextType | undefined>(undefined);
