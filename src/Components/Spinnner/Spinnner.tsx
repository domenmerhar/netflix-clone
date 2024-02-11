import { FC } from "react";
import classes from "./Spinner.module.css";

type PropsType = {
  width?: number;
  color?: string;
};

export const Spinnner: FC<PropsType> = ({ width = 200, color = "red" }) => {
  return (
    <div
      className={classes["spinner"]}
      style={{
        width,
        maxHeight: `${width}px`,
        minHeight: `${width}px`,
        borderColor: `transparent ${color} transparent ${color}`,
      }}
    ></div>
  );
};
