import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { IRocket } from '../../interfaces/IRocket'
import { ICrew } from '../../interfaces/ICrew'
import { useTranslation } from 'react-i18next'

interface LaunchRocketModalProps {
  allCrews: ICrew[]
  rocket: IRocket
  close: MouseEventHandler<HTMLDivElement>
  addLaunch: (
    rocket_id: string,
    launch: any
  ) => MouseEventHandler<HTMLDivElement>
}

export const LaunchRocketModal = (props: LaunchRocketModalProps) => {
  const { t } = useTranslation()

  const [launchCodeInput, setLaunchCodeInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [crewInput, setCrewInput] = useState('')
  const [successInput, setSucessInput] = useState(false)

  const handleChange =
    (setFunction: React.Dispatch<React.SetStateAction<any>>) =>
    (event: ChangeEvent) => {
      const element = event.target as HTMLInputElement
      if (element.type != 'checkbox') {
        setFunction(element.value)
      } else {
        setFunction(element.checked)
      }
    }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('launchCode')}:</label>
          <input
            data-cy="launch-code-input"
            type="text"
            onChange={handleChange(setLaunchCodeInput)}
          />
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('date')}:</label>
          <input
            data-cy="date-input"
            type="date"
            placeholder="MM/DD/YYYY"
            onChange={handleChange(setDateInput)}
          />
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('crew')}:</label>
          <select onChange={handleChange(setCrewInput)}>
            {props.allCrews.map(crew => (
              <option value={crew.id}>{crew.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div-checkbox">
          <label style={{ fontSize: '22px' }}>{t('success')}:&nbsp;&nbsp;</label>
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={handleChange(setSucessInput)}
          />
          <span className="checkmark"></span>
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          className="btn btn-green"
          onClick={props.addLaunch(props.rocket.id, {
            launch_code: launchCodeInput,
            date: dateInput,
            success: successInput,
            crew: crewInput,
          })}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
