import { ChangeEvent, MouseEventHandler, useState } from "react"
import { Modal } from "../Modal"
import { ILaunch } from "../../interfaces/ILaunch"

interface EditLaunchModalProps {
    launch: ILaunch
    close: MouseEventHandler<HTMLDivElement>
    editLaunch: (launch: ILaunch) => MouseEventHandler<HTMLDivElement>
}

export const EditLaunchModal = (props: EditLaunchModalProps) => {
    const [launchCodeInput, setLaunchCodeInput] = useState('')
    const [dateInput, setDateInput] = useState(props.launch.date)
    const [crewInput, setCrewInput] = useState('')
    const [successInput, setSucessInput] = useState(props.launch.success)

    const handleChange = (setFunction: React.Dispatch<React.SetStateAction<any>>) => (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement
        if (element.type != 'checkbox') {
            setFunction(element.value)
        } else {
            setFunction(element.checked)
        }
    }

    const _onFocus = function(e: any){
        e.currentTarget.type = "date";
    }
    const _onBlur = function(e: any){
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Enter a Date";
    }

    return (
        <Modal close={props.close}>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Launch code:</label>
                    <input type="text" placeholder={props.launch.launch_code} onChange={ handleChange(setLaunchCodeInput) } />
                </div>
            </div>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Date:</label>
                    <input type="text" onFocus={_onFocus} onBlur={_onBlur} placeholder={props.launch.date} onChange={ handleChange(setDateInput) } />
                </div>
            </div>
            <div className="input-div-ctn">
                <div className="input-div">
                    <label>Crew:</label>
                    <input type="text" placeholder={props.launch.crew?.name ?? ''} onChange={ handleChange(setCrewInput) } />
                </div>
            </div>
            <div className="input-div-ctn">
                <div className="input-div-checkbox">
                    <label style={ {fontSize: '22px' } }>Success:&nbsp;&nbsp;</label>
                    <input className="checkbox-input" type="checkbox" onChange={ handleChange(setSucessInput) } />
                    <span className="checkmark"></span>
                </div>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div 
                    className="btn btn-green" 
                    onClick={props.editLaunch({
                        ...props.launch,
                        launch_code: launchCodeInput,
                        date: dateInput,
                        success: successInput
                    })}
                >
                    Confirm
                </div>
            </div>
        </Modal>
    )
}