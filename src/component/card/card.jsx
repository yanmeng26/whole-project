import React from 'react'
import "./card.css"

export const Card = (props)=>(
<div className = "card-container">
    
    <img className = "card-img" alt = "Recruiter" src={`/img/${props.project.id}.png`} width={400} height={300}  mode='fit'/>
    <h2>{props.project.name}</h2>
    <p> <a href ={props.project.link}>{props.project.link}</a></p>
</div>


)