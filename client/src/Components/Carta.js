import React from 'react'
import { Link } from "react-router-dom";
import './card.css'

const Card = ({nombre , image}) => {
  return (
    <div className="container3">
  <div className="card">
    <div className="imgBx">
      <img src={image} alt="" />
    </div>
    <div className="contentBx">
      <h2>{nombre}</h2>
      <div className="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      {/* <div className="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <Link >Buy Now</Link>
    </div>
  </div>
</div>
  )
}

export default Card