import { MouseEventHandler } from "react"
import { Card } from "../Card"

interface RocketCardProps {
    id: string
    name: string
    editButton: MouseEventHandler<HTMLDivElement>
    delete: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const RocketCard = (props: RocketCardProps) => (
    <Card>
        <h2>{props.name}</h2>
        <div className="btn-div">
            <div className="btn btn-blue launch-btn">Launch</div>
            <div className="btn btn-pink edit-btn" onClick={props.editButton}>Edit</div>
            <div className="btn btn-red delete-btn" onClick={props.delete(props.id)}>Delete</div>
        </div>
    </Card>
)