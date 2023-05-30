import { MouseEventHandler } from 'react'
import { Card } from '../Card'

interface RocketCardProps {
  id: string
  name: string
  launchButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const RocketCard = (props: RocketCardProps) => (
  <Card>
    <h2>{props.name}</h2>
    <div className="btn-div">
      <div className="btn btn-blue launch-btn" onClick={props.launchButton}>
        Launch
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
