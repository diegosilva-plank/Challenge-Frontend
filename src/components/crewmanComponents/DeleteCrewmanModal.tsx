import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrewman } from '../../interfaces/ICrewman'

interface DeleteCrewmanModalProps {
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
  deleteCrewman: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteCrewmanModal = (props: DeleteCrewmanModalProps) => {
  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>Are you sure you want to delete this crewman?</h3>
        <p>This action cannot be reversed</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div
          className="btn btn-green"
          onClick={props.deleteCrewman(props.crewman.id)}
        >
          Confirm
        </div>
      </div>
    </Modal>
  )
}
