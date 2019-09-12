import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function Nasa() {
  const [nasa, setNasa] = useState();

  useEffect(() => {
    console.log("useEffect is called");
    const getNasa = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
        );
        const nasainfo = response;
        console.log(nasainfo);
        setNasa(nasainfo.data);
      } catch (error) {
        console.log("Sorry no space", error);
      }
    };
    getNasa();
  }, []);

  console.log(nasa);
  return (
    <div className="container">
      {console.log(nasa)}
      <NasaCard info={nasa} />
    </div>
  );
}
