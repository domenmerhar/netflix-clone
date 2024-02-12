import { FC, useEffect, useState } from "react";
import { MovieType } from "../../types";

import classes from "./Row.module.css";
import { MovieCard } from "../Movie Card/MovieCard";
import { Spinner } from "../Spinner/Spinner";
import YouTube from "react-youtube";
import instance from "../../axios";
import { fetchMovie } from "../../Util/fetchMovie";
import { youtubeOptions } from "../../Util/youtubeOptions";

type PropsType = {
  title: string;
  fetchUrl: string;
  gap?: number;
  isBackdrop?: boolean;
  width?: number;
  spinnerHeight?: number;
};

export const Row: FC<PropsType> = ({
  title,
  fetchUrl,
  gap = 20,
  isBackdrop = true,
  width = 200,
  spinnerHeight,
}) => {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [videoID, setVideoID] = useState<string>("");
  const [currentMovie, setCurrentMovie] = useState<string>("");

  const handleClick = (movieName: string) => {
    return async () => {
      if (currentMovie === movieName) {
        setCurrentMovie("");
        setVideoID("");
      } else {
        setCurrentMovie(movieName);

        const videoID = await fetchMovie(movieName);
        setVideoID(videoID);
      }
    };
  };

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

  const spinner = isLoading && <Spinner width={spinnerHeight || width} />;

  const movieCards =
    !isLoading &&
    movies &&
    movies.map((movie: MovieType) => {
      const handleClickCard = handleClick(
        movie.name || movie.original_name || movie.original_title
      );

      const cardImage = `https://image.tmdb.org/t/p/original/${
        isBackdrop ? movie.backdrop_path : movie.poster_path
      }`;

      const title = movie.name || movie.original_name || movie.original_title;

      return movie.backdrop_path && movie.poster_path ? (
        <MovieCard
          handleClick={handleClickCard}
          key={movie.id}
          image={cardImage}
          title={title}
          width={width}
        />
      ) : null;
    });

  const videoPlayer = videoID && (
    <div>
      <YouTube
        opts={youtubeOptions}
        videoId={videoID}
        className={classes["movie-row__video-player"]}
      />
    </div>
  );

  return (
    <section className={classes["movie-row"]}>
      <h2>{title}</h2>
      <div style={{ gap }} className={classes["movie-row__movies"]}>
        {spinner}
        {movieCards}
      </div>
      {videoPlayer}
    </section>
  );
};
