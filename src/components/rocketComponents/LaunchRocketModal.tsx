import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Modal } from "../Modal";
import { ILaunch } from '../../interfaces/ILaunch';
import { IRocket } from '../../interfaces/IRocket';

interface LaunchRocketModalProps {
    rocket: IRocket
    close: MouseEventHandler<HTMLDivElement>
    addLaunch: (rocket_id: string, launch: Partial<Omit<ILaunch, 'id' | 'rocket'>>) => MouseEventHandler<HTMLDivElement>
}

export const LaunchRocketModal = (props: LaunchRocketModalProps) => {
    const [launchCodeInput, setLaunchCodeInput] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [crewInput, setCrewInput] = useState('')
    const [successInput, setSucessInput] = useState(false)

    const handleChange = (setFunction: React.Dispatch<React.SetStateAction<any>>) => (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement
        if (element.type != 'checkbox') {
            setFunction(element.value)
        } else {
            setFunction(element.checked)
        }
    }

    // const handleChange = (event: ChangeEvent) => {
    //     const element = event.target as HTMLInputElement
    //     setNameInput(element.value)
    // }

    return (
        <Modal close={props.close}>
            <div className="input-div-ctn">
                    <div className="input-div">
                        <label>Launch code:</label>
                        <input type="text" placeholder="Launch code" onChange={ handleChange(setLaunchCodeInput) } />
                    </div>
                </div>
                <div className="input-div-ctn">
                    <div className="input-div">
                        <label>Date:</label>
                        <input type="date" placeholder="MM/DD/YYYY" onChange={ handleChange(setDateInput) } />
                    </div>
                </div>
                <div className="input-div-ctn">
                    <div className="input-div">
                        <label>Crew:</label>
                        <input type="text" placeholder="Crew" onChange={ handleChange(setCrewInput) } />
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
                        onClick={props.addLaunch(props.rocket.id, {
                            launch_code: launchCodeInput,
                            date: dateInput,
                            success: successInput,
                        })}
                    >
                        Confirm
                    </div>
                </div>
        </Modal>
    )
}

// export interface ILaunch {
//     id: string
  
//     launch_code: string
  
//     date: string
  
//     success: boolean
  
//     rocket: IRocket
  
//     crew: ICrew
//   }
  