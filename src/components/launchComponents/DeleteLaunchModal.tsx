import { MouseEventHandler } from "react"
import { Modal } from "../Modal"
import { ILaunch } from "../../interfaces/ILaunch"

interface DeleteLaunchModalProps {
    launch: ILaunch
    close: MouseEventHandler<HTMLDivElement>
    deleteLaunch: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteLaunchModal = (props: DeleteLaunchModalProps) => {

    return (
        <Modal close={props.close}>
            <div className="modal-texts">
                <h3>Are you sure you want to delete this launch?</h3>
                <p>This action cannot be reversed</p>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div className="btn btn-green" onClick={props.deleteLaunch(props.launch.id)}>Confirm</div>
            </div>
        </Modal>
    )
}