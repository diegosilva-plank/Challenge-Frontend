import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'

interface DeleteCrewModalProps {
  crew: ICrew
  close: MouseEventHandler<HTMLDivElement>
  deleteCrew: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteCrewModal = (props: DeleteCrewModalProps) => {
  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>Are you sure you want to delete this crew?</h3>
        <p>This action cannot be reversed</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div
          className="btn btn-green"
          onClick={props.deleteCrew(props.crew.id)}
        >
          Confirm
        </div>
      </div>
    </Modal>
  )
}
