import { FC } from "react";

import classes from "./MovieCard.module.css";

type PropsType = {
  image: string;
  title: string;
  height?: number;
};

export const MovieCard: FC<PropsType> = ({ image, title, height = 300 }) => {
  return (
    <img
      className={classes["movie-card"]}
      src={image}
      alt={title}
      style={{ height }}
    />
  );
};
