import { useEffect, useState } from "react";
import instance from "../../axios";
import requests from "../../requests";
import { MovieType } from "../../types";

import classes from "./Hero.module.css";

export const Hero = () => {
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(requests.fetchNetflixOriginals, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const randomMovie = response.data.results.at(
        Math.floor(Math.random() * response.data.results.length - 1)
      );

      setMovie(randomMovie);
    };

    fetchData();
  }, []);

  const backgroundImage =
    movie && movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
      : undefined;

  console.log(backgroundImage);

  return (
    movie && (
      <section
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={classes.hero}
      >
        <div>
          <h1> {movie!.name}</h1>
          <div>
            <button>Play</button>
            <button>My list</button>
          </div>
          <p>{movie!.overview}</p>
        </div>
      </section>
    )
  );
};
