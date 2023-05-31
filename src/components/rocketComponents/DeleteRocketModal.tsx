import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { IRocket } from '../../interfaces/IRocket'
import { useTranslation } from 'react-i18next'

interface DeleteRocketModalProps {
  rocket: IRocket
  close: MouseEventHandler<HTMLDivElement>
  deleteRocket: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteRocketModal = (props: DeleteRocketModalProps) => {
  const { t } = useTranslation() 
  
  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>{t('deleteRocketConfirmationMsg')}</h3>
        <p>{t('irreversibleAction')}</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          className="btn btn-green"
          onClick={props.deleteRocket(props.rocket.id)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
