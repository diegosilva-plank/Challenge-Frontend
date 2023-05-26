import '../../css/modal.css'
import { MouseEventHandler } from 'react';
import { Modal } from "../Modal";
import { ICrewman } from '../../interfaces/ICrewman';

interface SeeCrewsModalProps {
    crewman: ICrewman
    close: MouseEventHandler<HTMLDivElement>
}

export const SeeCrewsModal = (props: SeeCrewsModalProps) => {
    return (
        <Modal close={props.close}>
            { props.crewman.crews.map(crew => <h2>{crew.name}</h2>) }
            <h3>To add this crewman to a new crew, go to Crews page</h3>
            <div className="btn-div">
                <a href="crews" style={{textDecoration: 'none'}}><div className="btn btn-green go-to-crews-btn">Go to Crews</div></a>
            </div>
        </Modal>
    )
}