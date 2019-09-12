import React from "react";
import "./NasaCard.css";
const NasaCard = props => {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <div className="card">
            <h2 className="title">{props.info.title}</h2>
            <img className="image" alt="Space" src={props.info.url} />
            <h3 className="desc">{props.info.explanation}</h3>
            <h3 className="copyright">{props.info.copyright}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasaCard;
