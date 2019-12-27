import React from 'react';
import {Card} from '../card/card.jsx'
import './card-list.css'
export const CardList = props =>{
    return <div className = 'card-list'>{
        props.projects.map(project=>(<Card key = {project.id} project = {project}/>))
                }</div>
}