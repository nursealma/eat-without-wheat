import React from 'react';
import './App.css';

const Recipe = ({title, summary, image, sourceUrl}) => {
    return (
        <div className="recipe">
            <h2>{title}</h2>
            <p>     {summary.replace(/<[^>]+>/g, '')}</p>
            <img src={image} alt={title}/>
        </div>
    )
}

export default Recipe; 



