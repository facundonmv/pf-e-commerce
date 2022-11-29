import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { getDetail, cleanDetail } from "../Redux/actions/index";
import "./Details.css"

export default function Details (props) {
	const history = useHistory();
    const dispatch = useDispatch()

    let pim = useSelector((state) => state.detail)
    
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    function handleBack(e){
        e.preventDefault();
        dispatch(cleanDetail());                       
        history.push('/home');
    }

    return(
        <div class="container">
			{
				pim?
		<div class="card">
		    <div class="shoeBackground">
		        <div class="gradients">
			  <div class="gradient second" color="blue"></div>
			  <div class="gradient" color="red"></div>
			  <div class="gradient" color="green"></div>
			  <div class="gradient" color="orange"></div>
			  <div class="gradient" color="black"></div>
		        </div>
		        <h1 class="marca">Unique</h1>
		        <img src="https://raw.githubusercontent.com/facundonmv/pf-e-commerce/19d7e26be4a6c26f4e9bcf111940052537d4b0f7/client/public/images/LogoMakr-54lVc2.png" alt="" class="logo"/>
				<Link class="share" onClick={ e => handleBack(e)}>volver 
			        <i class="fi-rr-share"></i>
					</Link> 
	  
		        <img src={pim.image} alt="" class="shoe show" color="blue"/>
		        <img src={pim.image} alt="" class="shoe" color="red"/>
		        <img src={pim.image} alt="" class="shoe" color="green"/>
		        <img src={pim.image} alt="" class="shoe" color="orange"/>
		        <img src={pim.image} alt="" class="shoe" color="black"/>
	  
		    </div>
		    <div class="info">
		        <div class="shoeName">
			  <div>
			      <h1 class="big">{pim.name}</h1>
			      {/*<span class="new">new</span>*/}
			  </div>
			 {/* <h3 class="small">Men's running shoes</h3>*/}
		        </div>
		        <div class="description">
			  <h3 class="title">Descripción</h3>
			  <p class="text">{pim.description}</p>
		        </div>
		        <div class="color-container">
			  <h3 class="title">Colores</h3>
			  <div class="colors">
			      <span class="color active" primary="#2175f5" color="blue"></span>
			      <span class="color" primary="#f84848" color="red"></span>
			      <span class="color" primary="#29b864" color="green"></span>
			      <span class="color" primary="#ff5521" color="orange"></span>
			      <span class="color" primary="#444" color="black"></span>
			  </div>
		        </div>
		        <div class="size-container">
			  <h3 class="title">tamaño</h3>
			  <div class="sizes">
			     
			      <span class="size active">{pim.size}</span>
			      
			  </div>
		        </div>
		        <div class="buy-price">
			  <Link to={""} class="buy"><i class="fi-rr-shopping-cart-add"></i>Añadir al carrito</Link>
			  <div class="price">
				<i class="fi-rr-dollar"></i>			 
			          <h1>{pim.price}</h1>
			  </div>
		        </div>
		    </div>
		</div> : <img src="https://i.gifer.com/EXfY.gif" className="pokeball-gif"/>
		} 
		
	      </div>
    )
}