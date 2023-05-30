import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'

interface EditCrewModalProps {
  crew: ICrew
  close: MouseEventHandler<HTMLDivElement>
  editCrew: (id: string, name: string) => MouseEventHandler<HTMLDivElement>
}

export const EditCrewModal = (props: EditCrewModalProps) => {
  const [nameInput, setNameInput] = useState(props.crew.name)
  const handleChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setNameInput(element.value || props.crew.name)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>Name:</label>
          <input
            type="text"
            placeholder={props.crew.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div
          className="btn btn-green"
          onClick={props.editCrew(props.crew.id, nameInput)}
        >
          Confirm
        </div>
      </div>
    </Modal>
  )
}
