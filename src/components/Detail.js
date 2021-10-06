import React from "react";

function Detail(props) {
  return (
    <div>
      <h5>{props.cookie.name}</h5>
      <img src={props.cookie.image} alt="cookie"></img>
      <p>{props.cookie.price} KD</p>
      <p>{props.cookie.description} </p>
    </div>
  );
}

export default Detail;
