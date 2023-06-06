import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrewman } from '../../interfaces/ICrewman'
import { useTranslation } from 'react-i18next'

interface DeleteCrewmanModalProps {
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
  deleteCrewman: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteCrewmanModal = (props: DeleteCrewmanModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>{t('deleteCrewmanConfirmationMsg')}</h3>
        <p>{t('irreversibleAction')}</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          data-cy="delete-crewman-confirm-btn"
          className="btn btn-green"
          onClick={props.deleteCrewman(props.crewman.id)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
