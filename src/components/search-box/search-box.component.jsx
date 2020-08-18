import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({Placeholder, handleChange})=> (
    <input className='search' type='search' placeholder={Placeholder} onChange={handleChange}/>
)