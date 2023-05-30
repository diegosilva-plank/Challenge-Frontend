import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ICrewman } from '../../interfaces/ICrewman'

interface EditCrewmanModalProps {
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
  editCrewman: (
    id: string,
    name: string,
    patent: string
  ) => MouseEventHandler<HTMLDivElement>
}

export const EditCrewmanModal = (props: EditCrewmanModalProps) => {
  const [nameInput, setNameInput] = useState(props.crewman.name)
  const [patentInput, setPatentInput] = useState(props.crewman.patent)
  const handleChangeName = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setNameInput(element.value || props.crewman.name)
  }
  const handleChangePatent = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setPatentInput(element.value || props.crewman.patent)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>Name:</label>
          <input
            type="text"
            placeholder={props.crewman.name}
            onChange={handleChangeName}
          />
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>Patent:</label>
          <input
            type="text"
            placeholder={props.crewman.patent}
            onChange={handleChangePatent}
          />
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          Cancel
        </div>
        <div
          className="btn btn-green"
          onClick={props.editCrewman(props.crewman.id, nameInput, patentInput)}
        >
          Confirm
        </div>
      </div>
    </Modal>
  )
}
