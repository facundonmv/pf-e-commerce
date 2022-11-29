import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"



export default function LandingPage (){


    return(
        <div>
        <section id="hero">
<h4>Comercio en oferta</h4>
<h2>Ofertas de gran valor</h2>
<h1>En todos los productos</h1>
<p>Ahorre más con cupones y hasta un 70 % de descuento!</p>
<Link to={"/home"}>Compra Ahora</Link>
        </section>
        </div>
    )
}