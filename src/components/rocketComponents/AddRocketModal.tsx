import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'

interface AddRocketModalProps {
  close: MouseEventHandler<HTMLDivElement>
  addRocket: (name: string) => MouseEventHandler<HTMLDivElement>
}

export const AddRocketModal = (props: AddRocketModalProps) => {
  const [nameInput, setNameInput] = useState('')
  const handleChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setNameInput(element.value)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>Rocket name:</label>
          <input
            type="text"
            placeholder="Rocket name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div className="btn btn-green" onClick={props.addRocket(nameInput)}>
          Confirm
        </div>
      </div>
    </Modal>
  )
}
