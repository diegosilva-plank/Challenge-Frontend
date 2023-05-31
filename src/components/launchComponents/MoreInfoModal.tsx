import '../../css/modal.css'
import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ILaunch } from '../../interfaces/ILaunch'
import { useTranslation } from 'react-i18next'

interface MoreInfoModalProps {
  launch: ILaunch
  close: MouseEventHandler<HTMLDivElement>
}

export const MoreInfoModal = (props: MoreInfoModalProps) => {
  const { t } = useTranslation()
  
  return (
    <Modal close={props.close}>
      <h2>{`${t('launchCode')}: ${props.launch.launch_code}`}</h2>
      <h2>{`${t('rocket')}: ${props.launch.rocket.name}`}</h2>
      <h2>{`${t('date')}: ${props.launch.date}`}</h2>
      <h2>{`${t('crew')}: ${props.launch.crew?.name ?? ''}`}</h2>
      <h2>{`${t('success')}: ${props.launch.success ? 'YES' : 'NO'}`}</h2>
    </Modal>
  )
}
