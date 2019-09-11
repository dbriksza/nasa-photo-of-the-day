import React from "react";

const NasaCard = props => {
  return (
    <div>
      <img alt="Space" src={props.url} />
      <h2>{props.title}</h2>
      <h3>{props.explanation}</h3>
      <h3>{props.copyright}</h3>
    </div>
  );
};

export default NasaCard;
