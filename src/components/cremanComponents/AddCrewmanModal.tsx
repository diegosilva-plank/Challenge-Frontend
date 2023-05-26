import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Modal } from "../Modal";

interface AddCrewmanModalProps {
    close: MouseEventHandler<HTMLDivElement>
    addCrewman: (name: string, patent: string) => MouseEventHandler<HTMLDivElement>
}

export const AddCrewmanModal = (props: AddCrewmanModalProps) => {
    const [nameInput, setNameInput] = useState('')
    const [patentInput, setPatentInput] = useState('')
    const handleChangeName = (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement
        setNameInput(element.value)
    }
    const handleChangePatent = (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement
        setPatentInput(element.value)
    }

    return (
        <Modal close={props.close}>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" onChange={handleChangeName} />
                </div>
            </div>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Patent:</label>
                    <input type="text" placeholder="Patent" onChange={handleChangePatent} />
                </div>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div className="btn btn-green" onClick={props.addCrewman(nameInput, patentInput)}>Confirm</div>
            </div>
        </Modal>
    )
}