import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { IRocket } from '../../interfaces/IRocket'
import { useTranslation } from 'react-i18next'

interface EditRocketModalProps {
  rocket: IRocket
  close: MouseEventHandler<HTMLDivElement>
  editRocket: (id: string, name: string) => MouseEventHandler<HTMLDivElement>
}

export const EditRocketModal = (props: EditRocketModalProps) => {
  const { t } = useTranslation()

  const [nameInput, setNameInput] = useState(props.rocket.name)
  const handleChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setNameInput(element.value || props.rocket.name)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('rocketName')}:</label>
          <input
            type="text"
            placeholder={props.rocket.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          className="btn btn-green"
          onClick={props.editRocket(props.rocket.id, nameInput)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
