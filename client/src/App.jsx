import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "message isnt passed from server",
  );
  useEffect(() => {
    // or use .ENV variable 
    fetch("http://add_your_ip:5000/api/message")
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
