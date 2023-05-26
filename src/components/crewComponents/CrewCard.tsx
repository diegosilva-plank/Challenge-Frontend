import { MouseEventHandler } from "react"
import { Card } from "../Card"

interface CrewCardProps {
    id: string
    name: string
    seeCrewmanButton: MouseEventHandler<HTMLDivElement>
    // editButton: MouseEventHandler<HTMLDivElement>
    deleteButton: MouseEventHandler<HTMLDivElement>
}

export const CrewCard = (props: CrewCardProps) => (
    <Card>
        <h2>{props.name}</h2>
        <div className="btn-div">
            <div className="btn btn-blue crewmen-btn" onClick={props.seeCrewmanButton}>See crewmen</div>
            <div className="btn btn-pink edit-btn">Edit</div>
            <div className="btn btn-red delete-btn" onClick={props.deleteButton}>Delete</div>
        </div>
    </Card>
)