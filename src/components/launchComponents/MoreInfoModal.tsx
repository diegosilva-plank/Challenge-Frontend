import '../../css/modal.css'
import { MouseEventHandler } from 'react'
import { Modal } from '../Modal'
import { ILaunch } from '../../interfaces/ILaunch'

interface MoreInfoModalProps {
  launch: ILaunch
  close: MouseEventHandler<HTMLDivElement>
}

export const MoreInfoModal = (props: MoreInfoModalProps) => {
  return (
    <Modal close={props.close}>
      <h2>{`Launch code: ${props.launch.launch_code}`}</h2>
      <h2>{`Rocket: ${props.launch.rocket.name}`}</h2>
      <h2>{`Date: ${props.launch.date}`}</h2>
      <h2>{`Crew: ${props.launch.crew?.name ?? ''}`}</h2>
      <h2>{`Success: ${props.launch.success ? 'YES' : 'NO'}`}</h2>
    </Modal>
  )
}
