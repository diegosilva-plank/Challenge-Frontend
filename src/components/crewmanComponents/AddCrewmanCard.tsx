import { MouseEventHandler } from 'react'
import { Card } from '../Card'

interface AddCrewmanModalProps {
  addCrewmanBtn: MouseEventHandler<HTMLDivElement>
}

export const AddCrewmanCard = (props: AddCrewmanModalProps) => (
  <Card>
    <div className="btn-div">
      <div
        className="btn btn-green add-crewman-btn"
        onClick={props.addCrewmanBtn}
      >
        Add Crewman
      </div>
    </div>
  </Card>
)
