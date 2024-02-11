import { FC, useEffect, useState } from "react";
import { MovieType, SearchListResponse } from "../../types";

import classes from "./Row.module.css";
import { MovieCard } from "../Movie Card/MovieCard";
import { Spinnner } from "../Spinnner/Spinnner";
import YouTube from "react-youtube";
import instance from "../../axios";
import axios from "axios";

type PropsType = {
  title: string;
  fetchUrl: string;
  gap?: number;
  isBackdrop?: boolean;
  width?: number;
  spinnerHeight?: number;
};

const youtubeOptions = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
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
    const fetchMovie = async (searchQuery: string) => {
      console.log("query: ", searchQuery);
      const { data }: { data: SearchListResponse } = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 1,
            key: "AIzaSyAa90xYjDuWU0QRwuxhunJqBxJW33YdFWQ",
            q: `${searchQuery} trailer`,
          },
        }
      );

      return data.items[0].id.videoId;
    };

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

  return (
    <section className={classes["movie-row"]}>
      <h2>{title}</h2>
      <div style={{ gap }}>
        {isLoading && <Spinnner width={spinnerHeight || width} />}
        {!isLoading &&
          movies!.map((movie: MovieType) =>
            movie.backdrop_path && movie.poster_path ? (
              <MovieCard
                handleClick={handleClick(
                  movie.name || movie.original_name || movie.original_title
                )}
                key={movie.id}
                image={`https://image.tmdb.org/t/p/original/${
                  isBackdrop ? movie.backdrop_path : movie.poster_path
                }`}
                title={
                  movie.name || movie.original_name || movie.original_title
                }
                width={width}
              />
            ) : null
          )}
      </div>
      {videoID && <YouTube opts={youtubeOptions} videoId={videoID} />}
    </section>
  );
};
