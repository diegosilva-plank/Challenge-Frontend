import { MouseEventHandler } from 'react'
import { Card } from '../Card'

interface LaunchCardProps {
  id: string
  launchCode: string
  rocketName: string
  infoButton: MouseEventHandler<HTMLDivElement>
  editButton: MouseEventHandler<HTMLDivElement>
  deleteButton: MouseEventHandler<HTMLDivElement>
}

export const LaunchCard = (props: LaunchCardProps) => (
  <Card>
    <h2>{props.launchCode}</h2>
    <h3>{props.rocketName}</h3>
    <div className="btn-div">
      <div className="btn btn-blue info-btn" onClick={props.infoButton}>
        More info
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
