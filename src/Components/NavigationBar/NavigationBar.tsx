import React from "react";
import { NetflixLogo } from "../NetflixLogo/NetflixLogo";

export const NavigationBar = () => {
  return (
    <nav>
      <NetflixLogo />
      <img
        src="https://wallpapers.com/images/hd/smiley-face-2560-x-1600-picture-qskp7rvw9msed949.jpg"
        alt="Your Profile Picture"
        width={64}
        height={64}
      />
    </nav>
  );
};
