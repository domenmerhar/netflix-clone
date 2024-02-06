import { FC, useEffect, useState } from "react";
import instance from "../../axios";
import { MovieType } from "../../types";
import { MovieCard } from "../Movie Card/MovieCard";

type PropsType = { title: string; fetchUrl: string };

export const Row: FC<PropsType> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(fetchUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.results);

      setMovies(response.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <section>
      <h2>{title}</h2>
      {!isLoading &&
        movies!.map((movie: MovieType) => (
          <MovieCard
            key={movie.id}
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            title={movie.name}
          />
        ))}
    </section>
  );
};
