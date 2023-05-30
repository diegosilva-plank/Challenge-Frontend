import { MouseEventHandler } from 'react'
import { Card } from '../Card'

interface AddCrewModalProps {
  addCrewBtn: MouseEventHandler<HTMLDivElement>
}

export const AddCrewCard = (props: AddCrewModalProps) => (
  <Card>
    <div className="btn-div">
      <div className="btn btn-green add-crew-btn" onClick={props.addCrewBtn}>
        Add crew
      </div>
    </div>
  </Card>
)
