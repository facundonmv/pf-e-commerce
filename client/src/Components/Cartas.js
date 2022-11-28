import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Carta from './Carta'
import {traerProductos} from '../Redux/actions'

export default function Cartas(){
   
    const dispatch = useDispatch()
    const AllProductos = useSelector((state)=>state.product)

   

    useEffect( () => {
      dispatch(traerProductos())
      },[dispatch])

      console.log(AllProductos)
      console.log('hola')

      
  return (

    <>
      

      
          
          {
            AllProductos.length > 0 ? AllProductos.map((el)=>{
             return   <Carta nombre={el.name} image={el.image} /> 
            }): <h2>No se encontro Nada</h2>
            }
      
    </>     
      
  )
}



