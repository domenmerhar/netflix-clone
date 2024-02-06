import { FC, useEffect, useState } from "react";
import instance from "../../axios";

type PropsType = { title: string; fetchUrl: string };

export const Row: FC<PropsType> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(fetchUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.results);

      setMovies(response.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <section>
      <h2>{title}</h2>
      //{!isLoading && movies.map}
    </section>
  );
};
