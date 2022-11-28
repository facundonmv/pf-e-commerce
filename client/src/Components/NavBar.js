import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineQq } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { buscoPorNombre, filtroProductos, traerCategorias, traerProductos } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const categorias = useSelector(state => state.category)

  useEffect(() => {
    dispatch(traerProductos())
    dispatch(traerCategorias())
  }, [dispatch])

  function handleFiltro(e){
    e.preventDefault();
    dispatch(filtroProductos(e.target.value))
  }

  function handleOrden(e){
    e.preventDefault();
    dispatch(buscoPorNombre(e.target.value))
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="logo" onClick={closeMobileMenu}>
                  <img
                    src='/images/LogoMakr-54lVc2.png'
                    alt='Logo'
                  ></img>
            </Link>
            <SearchBar></SearchBar>
            <div>
                <select onChange={(e) => handleFiltro(e)}>
                    <option value=''>Categorias</option>
                    {categorias?.map(categoria => {
                        return (<option value={categoria.name} key={categoria.id}>{categoria.name}</option>)
                    })}
                </select>
            </div>
            <div>  
                <select onChange={(e) => handleOrden(e)}>
                    <option value=''>Ordenalos</option>
                    <option value='Asc'>A to Z</option>
                    <option value='Desc'>Z to A</option>
                </select>
            </div>     
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Agregar Producto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;