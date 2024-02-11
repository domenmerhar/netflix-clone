import requests from "./requests";

import { Row } from "./Components/Row/Row";

import "./App.css";
import { Hero } from "./Components/Hero/Hero";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";

function App() {
  const url = "https://api.themoviedb.org/3/movie/238?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjQyMmI0Mzk4YTBmNjI0NmVjZmE4MjY1OWNmYzdjNiIsInN1YiI6IjY1YmZkN2JkYjMzOTAzMDE4Nzk3ZDhjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B5PRTgFRvWhLYioOudmPpTgw_jaMzleX-ApXmKkl8xQ",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
  return (
    <>
      <NavigationBar />
      <Hero />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isBackdrop={false}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        spinnerHeight={112}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        spinnerHeight={112}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        spinnerHeight={112}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        spinnerHeight={112}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        spinnerHeight={112}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        spinnerHeight={112}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        spinnerHeight={112}
      />
    </>
  );
}

export default App;
