import '../../css/modal.css'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'
import { ICrewman } from '../../interfaces/ICrewman'
import { useTranslation } from 'react-i18next'

interface AddCrewmanModalProps {
  allCrewmen: ICrewman[]
  crew: ICrew
  close: MouseEventHandler<HTMLDivElement>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  addCrewmanToCrew: (
    crewmanId: string,
    crew: ICrew,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => MouseEventHandler<HTMLDivElement>
}

export const AddCrewmanModal = (props: AddCrewmanModalProps) => {
  const { t } = useTranslation()

  const [crewmanIdInput, setCrewmanIdInput] = useState('')
  const handleChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setCrewmanIdInput(element.value)
  }

  return (
    <Modal close={props.close}>
      <div className="input-div-ctn">
        <div className="input-div">
          <label>{t('crewmanName')}:</label>
          <select onChange={handleChange}>
            {props.allCrewmen
              .filter(
                crewman =>
                  !props.crew.crewmen
                    .map(crewman_obj => crewman_obj.id)
                    .includes(crewman.id)
              )
              .map(crewman => (
                <option value={crewman.id}>{crewman.name}</option>
              ))}
          </select>
        </div>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          data-cy="add-crewman-to-crew-confirm-btn"
          className="btn btn-green"
          onClick={props.addCrewmanToCrew(
            crewmanIdInput,
            props.crew,
            props.setShowModal
          )}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
