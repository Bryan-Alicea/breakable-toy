import React from "react"
import { Link } from  "react-router-dom"

const LeagueTile = (props) => {
    
    return (
        
        <div>
            <Link to={`leagues/${props.id}`} >
                {props.name}
            </Link>
            <p>Number of Teams: {props.teams}</p>
            <p>Year founded: {props.founded}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default LeagueTile