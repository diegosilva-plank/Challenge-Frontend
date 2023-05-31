import '../../css/modal.css'
import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ICrewman } from '../../interfaces/ICrewman'
import { useTranslation } from 'react-i18next'

interface SeeCrewsModalProps {
  crewman: ICrewman
  close: MouseEventHandler<HTMLDivElement>
}

export const SeeCrewsModal = (props: SeeCrewsModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal close={props.close}>
      {props.crewman.crews.map(crew => (
        <h2>{crew.name}</h2>
      ))}
      <h3>{t('goToCrewsMsg')}</h3>
      <div className="btn-div">
        <a href="crews" style={{ textDecoration: 'none' }}>
          <div className="btn btn-green go-to-crews-btn">{t('goToCrews')}</div>
        </a>
      </div>
    </Modal>
  )
}
