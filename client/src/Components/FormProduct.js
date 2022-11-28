import React ,{useState} from 'react'
import './FormProduct.css'
import Input from './formInput'
import { crearProducto } from '../Redux/actions'
import { useSelector , useDispatch} from 'react-redux';

const FormProduct = () => {
  const dispatch = useDispatch()
  const[titulo, setTitulo] = useState({campo:'',valido:null})
  const[precio, setPrecio] = useState({campo:'',valido:null})
  const[size, setSize] = useState({campo:'',valido:null})
  const[validarForm, SetvalidarForm] = useState(null)
  const expreRP = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  const expreRN =/^\d{1,14}$/

  const onSubmit= (e)=>{
    e.preventDefault();

    if(titulo.valido === 'true' && precio.valido === 'true' && size.valido === 'true'){
      SetvalidarForm(true)
      dispatch(crearProducto ({
          name:titulo.campo,
          description: '2',
          image:"https://www.tiendafacil.com.ar/tienda/uploads/600x600/1657407840_30d24c2a.jpg",
          price:precio.campo,
          stock:"2",
          category:"llaveros",
           size:size.campo
         }))
     
      setTitulo({campo:'',valido:null})
      setPrecio({campo:'',valido:null})
      setSize({campo:'',valido:null})
    }else{
      SetvalidarForm(false)
    }

  }
  return (
    <div className='container'>
    <form className='form' onSubmit={onSubmit}>
     
       <Input
       estado={titulo}
       cambiarEstado={setTitulo}
        titulo='Nombre del Producto'
        tipo= 'text'
        Error='caracter no valido'
        expreReg={expreRP}
       />

       <Input
       estado={precio}
       cambiarEstado={setPrecio}
        titulo='Precio'
        tipo= 'text'
        Error='Caracter no valido'
        expreReg={expreRN}
       />
       <Input
       estado={size}
       cambiarEstado={setSize}
        titulo='Stock'
        tipo= 'text'
        Error='Error'
        expreReg={expreRN}
       />
        <div className='errorContaimner'>
      {validarForm === false && 
        <p className="error">Rellene las casillas correctamente</p>
         }</div>

         
      <div className='buttonContainer'>
        <button  className='button'type='submit'> Enviar</button>
       {validarForm === true && <p className='exito'>El producto se cargo Corretamente</p>}
        </div>    

    </form>
    </div>
  )
}

export default FormProduct  


 