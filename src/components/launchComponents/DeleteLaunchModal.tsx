import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ILaunch } from '../../interfaces/ILaunch'
import { useTranslation } from 'react-i18next'

interface DeleteLaunchModalProps {
  launch: ILaunch
  close: MouseEventHandler<HTMLDivElement>
  deleteLaunch: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteLaunchModal = (props: DeleteLaunchModalProps) => {
  const { t } = useTranslation()
  
  return (
    <Modal close={props.close}>
      <div className="modal-texts">
        <h3>{t('deleteLaunchConfirmationMsg')}</h3>
        <p>{t('irreversibleAction')}</p>
      </div>
      <div className="btn-div">
        <div className="btn btn-red" onClick={props.close}>
          {t('cancel')}
        </div>
        <div
          className="btn btn-green"
          onClick={props.deleteLaunch(props.launch.id)}
        >
          {t('confirm')}
        </div>
      </div>
    </Modal>
  )
}
