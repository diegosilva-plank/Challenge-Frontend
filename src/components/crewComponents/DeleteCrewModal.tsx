import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'
import { useTranslation } from 'react-i18next'

interface DeleteCrewModalProps {
  crew: ICrew
  close: MouseEventHandler<HTMLDivElement>
  deleteCrew: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteCrewModal = (props: DeleteCrewModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>{t('deleteCrewConfirmationMsg')}</h3>
        <p>{t('irreversibleAction')}</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          data-cy="delete-crew-confirm-btn"
          className="btn btn-green"
          onClick={props.deleteCrew(props.crew.id)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
