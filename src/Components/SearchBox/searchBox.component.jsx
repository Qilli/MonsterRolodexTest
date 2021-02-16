import React from 'react';
import './searchBox.styles.css';

export const SearchBox =({placeholder,onChange})=>(
    <input type="search" 
    className="search"
    placeholder={placeholder} 
    onChange={onChange} />
)
