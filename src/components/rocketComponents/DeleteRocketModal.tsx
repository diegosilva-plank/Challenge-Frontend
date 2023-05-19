import { MouseEventHandler } from "react"
import { Modal } from "../Modal"

interface DeleteRocketModalProps {
    id: string
    close: MouseEventHandler<HTMLDivElement>
    deleteRocket: (id: string) => MouseEventHandler<HTMLDivElement>
}

export const DeleteRocketModal = (props: DeleteRocketModalProps) => {

    return (
        <Modal close={props.close}>
            <div className="modal-texts">
                <h3>Are you sure you want to delete this rocket?</h3>
                <p>This action cannot be reversed</p>
            </div>
            <div className="btn-div">
                <div className="btn btn-red" onClick={props.close}>Cancel</div>
                <div className="btn btn-green" onClick={props.deleteRocket(props.id)}>Confirm</div>
            </div>
        </Modal>
    )
}