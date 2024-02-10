import React, { useEffect, useState } from "react";
import { NetflixLogo } from "../NetflixLogo/NetflixLogo";

import classes from "./NavigationBar.module.css";

export const NavigationBar = () => {
  const [hasBackground, setHasBackground] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) return setHasBackground(true);
      setHasBackground(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav
      className={`${classes["navigation-bar"]} ${
        hasBackground
          ? classes["navigation-bar--black"]
          : classes["navigation-bar--transparent"]
      }`}
    >
      <div>
        <NetflixLogo />
        <img
          src="https://wallpapers.com/images/hd/smiley-face-2560-x-1600-picture-qskp7rvw9msed949.jpg"
          alt="Your Profile Picture"
          width={64}
          height={64}
        />
      </div>
    </nav>
  );
};
