import requests from "./requests";

import { Row } from "./Components/Row/Row";

import "./App.css";

function App() {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </>
  );
}

export default App;
