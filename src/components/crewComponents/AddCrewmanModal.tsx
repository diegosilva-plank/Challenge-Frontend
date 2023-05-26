import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Modal } from "../Modal";
import { ICrew } from '../../interfaces/ICrew';
import { ICrewman } from '../../interfaces/ICrewman';

interface AddCrewmanModalProps {
    allCrewmen: ICrewman[]
    crew: ICrew
    close: MouseEventHandler<HTMLDivElement>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    addCrewmanToCrew: (crewmanId: string, crew: ICrew, setShowModal: React.Dispatch<React.SetStateAction<boolean>>) => MouseEventHandler<HTMLDivElement>
}

export const AddCrewmanModal = (props: AddCrewmanModalProps) => {
    const [crewmanIdInput, setCrewmanIdInput] = useState('')
    const handleChange = (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement
        setCrewmanIdInput(element.value)
    }

    return (
        <Modal close={props.close}>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Crewman name:</label>
                    <select onChange={handleChange}>
                        { props.allCrewmen.filter(crewman => !props.crew.crewmen.map(crewman_obj => crewman_obj.id).includes(crewman.id)).map(crewman => <option value={crewman.id}>{crewman.name}</option>) }
                    </select>
                </div>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div className="btn btn-green" onClick={props.addCrewmanToCrew(crewmanIdInput, props.crew, props.setShowModal)}>Confirm</div>
            </div>
        </Modal>
    )
}