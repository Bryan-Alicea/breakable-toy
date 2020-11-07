import React, { useState, useEffect } from "react"

import LeagueTile from './LeagueTile'

const LeagueIndexContainer = (props) => {
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        fetch("/api/v1/leagues")
        .then(reponse => {
            if(response.ok){
                return response
            } else {
                let errorMessage = `${response.status}(${response.statusText})`,
                error = new Error(errorMessage)
                throw(error)
            }
        })
        .then(reponse => {
            return response.json()
        })
        .then(body => {
            setLeagues(body)
        }).catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

    let Leaguetiles = leagues.map((league) => {
        return(
         <LeagueTile
            key ={league.id}
            id = {league.id}
            name = {league.name}
            teams = {league.number_of_teams}
            founded = {league.year_founded}
            description = {league.description}
         />
        )
    })

    return (
        <div>
            {Leaguetiles}
        </div>
    )
}

export default LeagueIndexContainer