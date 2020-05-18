import React from 'react'
import './input.css'

export const Input=({type,placeholder,handleChange})=>{
    return(
        <div>
            <input className="search" type={type} placeholder={placeholder}  onChange={handleChange}/>
        </div>
    )
}