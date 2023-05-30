import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { IRocket } from '../../interfaces/IRocket'

interface EditRocketModalProps {
  rocket: IRocket
  close: MouseEventHandler<HTMLDivElement>
  editRocket: (id: string, name: string) => MouseEventHandler<HTMLDivElement>
}

export const EditRocketModal = (props: EditRocketModalProps) => {
  const [nameInput, setNameInput] = useState(props.rocket.name)
  const handleChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setNameInput(element.value || props.rocket.name)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>Rocket name:</label>
          <input
            type="text"
            placeholder={props.rocket.name}
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
          onClick={props.editRocket(props.rocket.id, nameInput)}
        >
          Confirm
        </div>
      </div>
    </Modal>
  )
}
