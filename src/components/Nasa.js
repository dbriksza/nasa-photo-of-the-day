import React, { useState, useEffect } from "react";
import Nasacard from "./NasaCard";
import axios from "axios";

export default function Nasa() {
  const [nasa, setNasa] = useState();
  //   const [breed, setBreed] = useState("mix");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
      )
      .then(response => {
        const nasainfo = response;
        console.log(nasainfo);
        setNasa(nasainfo.data.url);
      })
      .catch(error => {
        console.log("Sorry no space", error);
      });
  }, []);

  return (
    <div className="container">
      <img src={`${nasa}`} />
    </div>
  );
}
