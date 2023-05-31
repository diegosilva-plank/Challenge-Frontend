import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'
import { ICrewman } from '../../interfaces/ICrewman'
import { useTranslation } from 'react-i18next'

interface RemoveCrewmanModalProps {
  crew: ICrew
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
  removeCrewmanFromCrew: MouseEventHandler<HTMLDivElement>
}

export const RemoveCrewmanModal = (props: RemoveCrewmanModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>{t('removeCrewmanFromCrewConfirmationMsg')}</h3>
        <p>{t('irreversibleAction')}</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div className="btn btn-green" onClick={props.removeCrewmanFromCrew}>
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
