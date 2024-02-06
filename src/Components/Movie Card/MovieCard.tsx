import { FC } from "react";

import classes from "./MovieCard.module.css";

type PropsType = {
  image: string;
  title: string;
  width?: number;
};

export const MovieCard: FC<PropsType> = ({ image, title, width = 200 }) => {
  return (
    <div className={classes["movie-card"]}>
      <img src={image} alt={title} style={{ width }} />
    </div>
  );
};
