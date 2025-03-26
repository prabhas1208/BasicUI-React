import React, { useState, useEffect } from "react";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(`${data.setup} - ${data.punchline}`));
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div style={styles.Container}>
      <h1 style={styles.header}>CISCO UI</h1>
      <p style={styles.joke}>{joke ? joke : "Loading Joke..."} </p>
      <button style={styles.button} onClick={fetchJoke}>
        Get a new Joke
      </button>
    </div>
  );
}

const styles = {
  Container: {
    backgroundColor: "pink",
    padding: "10px 20px",
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2.5rem",
    color: "Purple",
    marginBottom: "20px",
  },
  joke: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "Grey",
    color: "white",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default App;
