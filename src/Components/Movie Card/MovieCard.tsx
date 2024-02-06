import { FC } from "react";

type PropsType = {
  image: string;
  title: string;
};

export const MovieCard: FC<PropsType> = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title} />
    </div>
  );
};
