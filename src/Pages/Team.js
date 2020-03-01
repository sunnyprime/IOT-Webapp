import React from 'react'
import "./Team.css"
import TeamCard from '../Component/TeamCard'


export default function Team() {
    return (
        <div className="container text-center Team justify-content-around">
            <h1>Team</h1>

            <TeamCard />
        </div>
    )
}
