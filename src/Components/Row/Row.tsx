import { FC, useEffect, useState } from "react";
import instance from "../../axios";
import { MovieType } from "../../types";

import classes from "./Row.module.css";
import { MovieCard } from "../Movie Card/MovieCard";

type PropsType = {
  title: string;
  fetchUrl: string;
  gap?: number;
  isBackdrop?: boolean;
  width?: number;
};

export const Row: FC<PropsType> = ({
  title,
  fetchUrl,
  gap = 20,
  isBackdrop = true,
  width = 200,
}) => {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(fetchUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMovies(response.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <section className={classes["movie-row"]}>
      <h2>{title}</h2>
      <div style={{ gap }}>
        {!isLoading &&
          movies!.map((movie: MovieType) => (
            <MovieCard
              key={movie.id}
              image={`https://image.tmdb.org/t/p/original/${
                isBackdrop ? movie.backdrop_path : movie.poster_path
              }`}
              title={movie.name}
              width={width}
            />
          ))}
      </div>
    </section>
  );
};
