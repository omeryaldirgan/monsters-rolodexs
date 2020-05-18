import React from 'react';
import './card.css'
export const Card=(props)=>{
    const {id,name,email}=props.monster;
    return(
        <div className="card-container">
            <img alt={name} src={`https://robohash.org/${id}?set=set2`}/>
            <h3>{name}</h3>
            <span>{email}</span>
        </div>
    )
}