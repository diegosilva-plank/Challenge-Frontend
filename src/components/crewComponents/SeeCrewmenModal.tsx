import '../../css/modal.css'
import '../../css/crew.css'
import { MouseEventHandler, useState } from 'react'
import { Modal } from '../Modal'
import { ICrew } from '../../interfaces/ICrew'
import { ICrewman } from '../../interfaces/ICrewman'
import { RemoveCrewmanModal } from './RemoveCrewmanModal'
import { AddCrewmanModal } from './AddCrewmanModal'

interface SeeCrewmenModalProps {
  allCrewmen: ICrewman[]
  crew: ICrew
  close: MouseEventHandler<HTMLDivElement>
  removeCrewmanFromCrewFactory: (
    crew: ICrew,
    crewman: ICrewman,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => MouseEventHandler<HTMLDivElement>
  addCrewmanToCrew: (
    crwemanId: string,
    crew: ICrew,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => MouseEventHandler<HTMLElement>
}

interface CrewmanItemProps {
  crewman: ICrewman
  removeButton: MouseEventHandler<HTMLDivElement>
}

const CrewmanItem = (props: CrewmanItemProps) => {
  return (
    <div className="input-div-ctn">
      <div className="crewman-div">
        <h2>{props.crewman.name}</h2>
        <div
          className="btn btn-red remove-crewman-btn"
          onClick={props.removeButton}
        >
          Remove
        </div>
      </div>
    </div>
  )
}

export const SeeCrewmenModal = (props: SeeCrewmenModalProps) => {
  const [showAddCrewmanModal, setShowAddCrewmanModal] = useState(false)
  const [showRemoveCrewmanModal, setShowRemoveCrewmanModal] = useState(false)
  const [crewmanRemoveModal, setCrewmanRemoveModal] = useState({} as ICrewman)

  const showAddCrewmanModalToggle = () => setShowAddCrewmanModal(prev => !prev)

  const showRemoveCrewmanModalToggle = (crewman: ICrewman) => {
    return () => {
      setCrewmanRemoveModal(crewman)
      setShowRemoveCrewmanModal(prev => !prev)
    }
  }

  return (
    <Modal close={props.close}>
      {props.crew.crewmen.map(crewman => (
        <CrewmanItem
          crewman={crewman}
          removeButton={showRemoveCrewmanModalToggle(crewman)}
        />
      ))}
      <div className="btn-div">
        <div
          className="btn btn-green add-crewman-btn"
          onClick={showAddCrewmanModalToggle}
        >
          Add crewman
        </div>
      </div>
      {showAddCrewmanModal && (
        <AddCrewmanModal
          allCrewmen={props.allCrewmen}
          crew={props.crew}
          close={showAddCrewmanModalToggle}
          setShowModal={setShowAddCrewmanModal}
          addCrewmanToCrew={props.addCrewmanToCrew}
        />
      )}
      {showRemoveCrewmanModal && (
        <RemoveCrewmanModal
          crew={props.crew}
          crewman={crewmanRemoveModal}
          close={showRemoveCrewmanModalToggle(crewmanRemoveModal)}
          removeCrewmanFromCrew={props.removeCrewmanFromCrewFactory(
            props.crew,
            crewmanRemoveModal,
            setShowRemoveCrewmanModal
          )}
        />
      )}
    </Modal>
  )
}
