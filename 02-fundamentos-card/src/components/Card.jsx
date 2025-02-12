import React from "react"
import PropTypes from "prop-types"

import "./Card.css"

const Card = ({lang, img, fcolor, scolor}) =>  {

  return( 
    <div className="card" style={{
      background: `linear-gradient(to left, ${fcolor}, ${scolor})`,
      borderRadius: "10px",
    }}>
      <img src={img} alt="lang.svg" />
      <h3>{lang}</h3>
    </div>
  );
};

Card.propTypes = {
  lang: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};

export default Card;
