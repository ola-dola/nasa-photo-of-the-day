import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QEjorSwWWs988U9L7I0W2XtYuiqAaI9qB9RpUzy8')
    .then(response => {
      console.log(response.data);
      setNasaData(response.data);
    })
    .catch(error => {
      console.log(error.message);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Body nasaData={nasaData} />
    </div>
  );
}

{/* <p>🚀</p> */}
export default App;
