import requests from "./requests";

import { Row } from "./Components/Row/Row";

import "./App.css";
import { Hero } from "./Components/Hero/Hero";

function App() {
  return (
    <>
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
        title="Romannnce Movies"
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
