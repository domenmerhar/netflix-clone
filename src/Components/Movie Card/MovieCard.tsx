import { FC } from "react";

import classes from "./MovieCard.module.css";

type PropsType = {
  image: string;
  title: string;
  height?: number;
};

export const MovieCard: FC<PropsType> = ({ image, title, height = 300 }) => {
  return (
    <div className={classes["movie-card"]} style={{ height: height * 1.1 }}>
      <img src={image} alt={title} style={{ height }} />
    </div>
  );
};
