import axios from 'axios'

export function traerProductos(){
    return async(dispatch)=>{
        let product = await axios("http://localhost:3001/product")
        console.log(product)
      return  dispatch({
            type:"GET_PRODUCT",
            payload: product.data})
    }

}

export function traerCategorias(){
  return async function(dispatch){
    let data = await axios.get("http://localhost:3001/product")
    return dispatch({type: "GET_CATEGORIES", payload: data.data})
  }
}

export function crearProducto(payload){
    return async()=>{
      const response = await axios.post("http://localhost:3001/product",payload)
      console.log(response)
      return response
    }
    
}

export function filtroProductos(payload){
  return {type: "FILTRO" , payload: payload}
}

export function ordenAZ(payload){
  return {type: "ordenAZ", payload: payload}
}

export function buscoPorNombre(query) {
  return {
      type: "BUSQUEDA",
      payload: query
  }
}