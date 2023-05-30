import '../css/modal.css'
import { MouseEventHandler, PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  close: MouseEventHandler<HTMLDivElement>
}

export const Modal = (props: ModalProps) => {
  return (
    <div id="add-rocket-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.close}>
          &times;
        </span>
        <div className="modal-fields">{props.children}</div>
      </div>
    </div>
  )
}
