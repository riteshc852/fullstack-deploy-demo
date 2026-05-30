import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "message isnt passed from server",
  );
  useEffect(() => {
    fetch("http://http://13.201.86.163/:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(`Error fetching message:`, err);
      });
  }, []);
  return (
    <>
      <h1>Frontend is installed</h1>
      <p> message : {message}</p>
    </>
  );
}

export default App;
