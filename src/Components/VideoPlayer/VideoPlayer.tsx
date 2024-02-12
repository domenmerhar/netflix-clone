import { FC } from "react";
import YouTube from "react-youtube";
import { youtubeOptions } from "../../Util/youtubeOptions";

import classes from "./VideoPlayer.module.css";

type PropsType = {
  videoID: string;
};

export const VideoPlayer: FC<PropsType> = ({ videoID }) => {
  return (
    <div>
      <YouTube
        opts={youtubeOptions}
        videoId={videoID}
        className={classes["video-player"]}
      />
    </div>
  );
};
