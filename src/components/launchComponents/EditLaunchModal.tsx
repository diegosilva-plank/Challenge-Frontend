import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ILaunch } from '../../interfaces/ILaunch'
import { ICrew } from '../../interfaces/ICrew'
import { useTranslation } from 'react-i18next'

interface EditLaunchModalProps {
  allCrews: ICrew[]
  launch: ILaunch
  close: MouseEventHandler<HTMLDivElement>
  editLaunch: (launch: any) => MouseEventHandler<HTMLDivElement>
}

export const EditLaunchModal = (props: EditLaunchModalProps) => {
  const { t } = useTranslation()

  const [launchCodeInput, setLaunchCodeInput] = useState(
    props.launch.launch_code
  )
  const [dateInput, setDateInput] = useState(props.launch.date)
  const [crewInput, setCrewInput] = useState('')
  const [successInput, setSucessInput] = useState(props.launch.success)

  const handleChange =
    (setFunction: React.Dispatch<React.SetStateAction<any>>, std?: string) =>
    (event: ChangeEvent) => {
      const element = event.target as HTMLInputElement
      if (element.type != 'checkbox') {
        setFunction(element.value || std)
      } else {
        setFunction(element.checked)
      }
    }

  const _onFocus = function (e: any) {
    e.currentTarget.type = 'date'
  }
  const _onBlur = function (e: any) {
    e.currentTarget.type = 'text'
    e.currentTarget.placeholder = 'Enter a Date'
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('launchCode')}:</label>
          <input
            data-cy="launch-code-input"
            type="text"
            placeholder={props.launch.launch_code}
            onChange={handleChange(
              setLaunchCodeInput,
              props.launch.launch_code
            )}
          />
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('date')}:</label>
          <input
            data-cy="date-input"
            type="text"
            onFocus={_onFocus}
            onBlur={_onBlur}
            placeholder={props.launch.date}
            onChange={handleChange(setDateInput, props.launch.date)}
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
          data-cy="edit-launch-confirm-btn"
          className="btn btn-green"
          onClick={props.editLaunch({
            ...props.launch,
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
