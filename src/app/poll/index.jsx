import React from "react";
import "./styles.css";
import Option from './option';

export default function poll({ options }){
    const max = Math.max(...options.map(option => option.votes));
    return (
    <div className="__dml_poll">
        {options.map((option) => (
        <Option label={option.label} votes={option.votes} max={max}/>
        ))}
    </div>
    ); 
}