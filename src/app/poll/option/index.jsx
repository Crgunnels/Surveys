import React from "react";


export default function PollOption({votes, max, label}){
    
    return <div className="poll-option">
        <div className="poll-label">{label}</div>
        <div className="votes">{votes}</div>
        <div className="bar"
         style={{
            maxWidth: `${votes / max * 100}%`,
            filter: `hue-rotate(${votes / max }turn)`
        }}/>
    </div>
    
}