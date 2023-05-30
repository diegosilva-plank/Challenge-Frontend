import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'
import { ICrewman } from '../../interfaces/ICrewman'

interface RemoveCrewmanModalProps {
  crew: ICrew
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
  removeCrewmanFromCrew: MouseEventHandler<HTMLDivElement>
}

export const RemoveCrewmanModal = (props: RemoveCrewmanModalProps) => {
  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>Are you sure you want to delete this crewman from this crew?</h3>
        <p>This action cannot be reversed</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div className="btn btn-green" onClick={props.removeCrewmanFromCrew}>
          Confirm
        </div>
      </div>
    </Modal>
  )
}
