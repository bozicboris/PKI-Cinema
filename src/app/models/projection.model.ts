import { Movie } from "./movie.model"

export interface Projection {
    id: Number
    price: Number
    startingAt: Date
    Movie: Movie  
} 