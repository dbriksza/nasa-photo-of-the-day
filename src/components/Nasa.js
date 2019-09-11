import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default async function Nasa() {
  const [nasa, setNasa] = useState();

  useEffect(() => {
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
      )
      .then(response => {
        const nasainfo = response;
        console.log(nasainfo);
        setNasa(nasainfo.data);
      })
      .catch(error => {
        console.log("Sorry no space", error);
      });
  }, []);

  console.log(nasa);
  return <div className="container">{<NasaCard info={nasa} />}</div>;
}
