import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ICrewman } from '../../interfaces/ICrewman'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

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
          <label>{t('name')}:</label>
          <input
            data-cy="crewman-name-input"
            type="text"
            placeholder={props.crewman.name}
            onChange={handleChangeName}
          />
        </div>
      </div>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('patent')}:</label>
          <input
            data-cy="crewman-patent-input"
            type="text"
            placeholder={props.crewman.patent}
            onChange={handleChangePatent}
          />
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          data-cy="edit-crewman-confirm-btn"
          className="btn btn-green"
          onClick={props.editCrewman(props.crewman.id, nameInput, patentInput)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
