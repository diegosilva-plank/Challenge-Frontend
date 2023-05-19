// import { MouseEventHandler, useState } from "react"
// import { Modal } from "../Modal"

// interface DeleteRocketModalProps {
//     id: string
//     close: MouseEventHandler<HTMLDivElement>
//     deleteRocket: (id: string) => MouseEventHandler<HTMLDivElement>
// }

// export const DeleteRocketModal = (props: DeleteRocketModalProps) => {

//     return (
//         <Modal close={props.close}>
//             <div class="modal-texts">
//                     <h3>Are you sure you want to delete this rocket?</h3>
//                     <p>This action cannot be reversed</p>
//                 </div>
//                 <div class="btn-div">
//                     <div class="btn btn-red">Cancel</div>
//                     <div class="btn btn-green">Confirm</div>
//                 </div>
//         </Modal>
//     )
// }