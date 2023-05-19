import { ChangeEvent, MouseEventHandler, useState } from "react"
import { Modal } from "../Modal"

interface EditRocketModalProps {
    id: string
    close: MouseEventHandler<HTMLDivElement>
    editRocket: (id: string, name: string) => MouseEventHandler<HTMLDivElement>
}

export const EditRocketModal = (props: EditRocketModalProps) => {
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
                    <input type="text" placeholder="Rocket name" onChange={handleChange} />
                </div>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div className="btn btn-green" onClick={props.editRocket(props.id, nameInput)}>Confirm</div>
            </div>
        </Modal>
    )
}