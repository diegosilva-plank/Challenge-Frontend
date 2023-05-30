import { MouseEventHandler } from 'react'
import { Card } from '../Card'

interface CrewmanCardProps {
  id: string
  name: string
  patent: string
  seeCrewsButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const CrewmanCard = (props: CrewmanCardProps) => (
  <Card>
    <h2>{props.name}</h2>
    <h3>{props.patent}</h3>
    <div className="btn-div">
      <div className="btn btn-blue crews-btn" onClick={props.seeCrewsButton}>
        See crews
      </div>
      <div className="btn btn-pink edit-btn" onClick={props.editButton}>
        Edit
      </div>
      <div className="btn btn-red delete-btn" onClick={props.deleteButton}>
        Delete
      </div>
    </div>
  </Card>
)
