import { FC } from "react";

type PropsType = {
  image: string;
  title: string;
  width?: number;
};

export const MovieCard: FC<PropsType> = ({ image, title, width = 200 }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width }} />
    </div>
  );
};
