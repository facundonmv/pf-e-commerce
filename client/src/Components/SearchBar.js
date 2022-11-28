import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscoPorNombre } from '../Redux/actions';

import styles from './SearchBar.module.css';

const SearchBar = () => {
    let dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(buscoPorNombre(name))
        setName('')
    }
    return (
        <div>
            <button className={styles.btn} type='submit' onClick={(e) => handleSubmit(e)}></button>
            <input type='search' value={name} placeholder='Busca tus productos' onChange={(e) => handleInputChange(e)}></input>
        </div>
    )
}

export default SearchBar;