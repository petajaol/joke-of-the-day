import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    axios
      .get("https://api.jokes.one/jod")
      .then((response) => {
        setJoke(response.data.contents.jokes[0].joke);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Joke of the day with Axios</h1>
      <h3>{joke.title}</h3>
      <p>{joke.text}</p>
    </div>
  );
}

export default App;
