import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          subtitle={movie.subtitle}
          description={movie.description}
          image={movie.image}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;