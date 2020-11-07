import React from "react"
import { Link } from  "react-router-dom"

const LeagueTile = props => {

    return (
        <tr>
            <td><Link to={`leagues/${props.id}`}>
                {props.name}
            </Link></td>
            <td><p>{props.number_of_teams}</p></td>
            <td><p>{props.year_founded}</p></td>
            <td><p>{props.description}</p></td>
        </tr>
    )
}

export default LeagueTile