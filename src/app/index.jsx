import React from 'react';
import Poll from "./poll";
import './index.css';
import json from  './data/options.json';

export default function App(){
    return <div className='container'>
        <Poll options={json.options} />
    </div>;
}