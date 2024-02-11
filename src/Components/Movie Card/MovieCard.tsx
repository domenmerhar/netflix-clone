import { FC } from "react";

import classes from "./MovieCard.module.css";

type PropsType = {
  image: string;
  title: string;
  width?: number;
  handleClick: () => Promise<void> | void;
};

export const MovieCard: FC<PropsType> = ({
  image,
  title,
  width = 200,
  handleClick,
}) => {
  return (
    <div
      onClick={() => handleClick()}
      className={classes["movie-card"]}
      style={{ width: width * 1.1 }}
    >
      <img src={image} alt={title} style={{ maxWidth: width }} />
    </div>
  );
};
