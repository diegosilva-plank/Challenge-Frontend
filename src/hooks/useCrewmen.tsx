import { useEffect, useState } from "react"
import { ICrewman } from "../interfaces/ICrewman"
import { crewmanServices } from "../services/crewmanServices"

export const useCrewmen = () => {
    const [crewmenState, setCrewmen] = useState([] as ICrewman[])
    const [showSeeCrewsModal, setShowSeeCrewsModal] = useState(false)
    const [crewmanSeeCrewsModal, setCrewmanSeeCrewsModal] = useState({} as ICrewman)
    const [showEditCrewmanModal, setShowEditCrewmanModal] = useState(false)
    const [crewmanEditModal, setCrewmanEditModal] = useState({} as ICrewman)
    const [showDeleteCrewmanModal, setShowDeleteCrewmanModal] = useState(false)
    const [crewmanDeleteModal, setCrewmanDeleteModal] = useState({} as ICrewman)
    const [showAddCrewmanModal, setShowAddCrewmanModal] = useState(false)

    const showModalToggle = (setShow: (value: React.SetStateAction<boolean>) => void, setCrewman?: (value: React.SetStateAction<ICrewman>) => void, crewman?: ICrewman) => {
        return () => {
            if (setCrewman && crewman) setCrewman(crewman)
            setShow(prev => !prev)
        }
    }

    const showAddCrewmanModalToggle = showModalToggle(setShowAddCrewmanModal)
    const showSeeCrewsModalToggle = (crewman: ICrewman) => showModalToggle(setShowSeeCrewsModal, setCrewmanSeeCrewsModal, crewman)
    const showEditCrewmanModalToggle = (crewman: ICrewman) => showModalToggle(setShowEditCrewmanModal, setCrewmanEditModal, crewman)
    const showDeleteCrewmanModalToggle = (crewman: ICrewman) => showModalToggle(setShowDeleteCrewmanModal, setCrewmanDeleteModal, crewman)

    const addCrewman = (name: string, patent: string) => {
        return async () => {
            await crewmanServices.createCrewman(name, patent)
            setShowAddCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const editCrewman = (id: string, name: string, patent: string) => {
        return async () => {
            crewmanServices.editCrewman(id, name, patent)
            setShowEditCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const deleteCrewman = (id: string) => {
        return async () => {
            await crewmanServices.deleteCrewman(id)
            setShowDeleteCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const crewmen = await crewmanServices.getCrewmen()
        setCrewmen(crewmen)
    }

    useEffect(() => {
        fetch()
    }, [])

    return {
        crewmen: crewmenState,
        showSeeCrewsModal,
        crewmanSeeCrewsModal,
        showEditCrewmanModal,
        crewmanEditModal,
        showDeleteCrewmanModal,
        crewmanDeleteModal,
        showAddCrewmanModal,
        showAddCrewmanModalToggle,
        showSeeCrewsModalToggle,
        showEditCrewmanModalToggle,
        showDeleteCrewmanModalToggle,
        addCrewman,
        editCrewman,
        deleteCrewman   
    }
}