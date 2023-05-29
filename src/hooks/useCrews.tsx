import { useEffect, useState } from "react"
import { ICrewman } from "../interfaces/ICrewman"
import { ICrew } from "../interfaces/ICrew"
import { crewServices } from "../services/crewServices"
import { crewmanServices } from "../services/crewmanServices"

export const useCrews = () => {
    const [crewmenState, setCrewmen] = useState([] as ICrewman[])
    const [crewsState, setCrews] = useState([] as ICrew[])
    const [showAddCrewModal, setShowAddCrewModal] = useState(false)
    const [showEditCrewModal, setShowEditCrewModal] = useState(false)
    const [crewEditModal, setCrewEditModal] = useState({} as ICrew)
    const [showDeleteCrewModal, setShowDeleteCrewModal] = useState(false)
    const [crewDeleteModal, setCrewDeleteModal] = useState({} as ICrew)
    const [showSeeCrewmenModal, setShowSeeCrewmenModal] = useState(false)
    const [crewSeeCrewmenModal, setCrewSeeCrewmenModal] = useState({} as ICrew)

    const showModalToggle = (setShow: (value: React.SetStateAction<boolean>) => void, setCrew?: (value: React.SetStateAction<ICrew>) => void, crew?: ICrew) => {
        return () => {
            if (setCrew && crew) setCrew(crew)
            setShow(prev => !prev)
        }
    }

    const showAddCrewModalToggle = showModalToggle(setShowAddCrewModal)
    const showEditCrewModalToggle = (crew: ICrew) => showModalToggle(setShowEditCrewModal, setCrewEditModal, crew)
    const showDeleteCrewModalToggle = (crew: ICrew) => showModalToggle(setShowDeleteCrewModal, setCrewDeleteModal, crew)
    const showSeeCrewmenModalToggle = (crew: ICrew) => showModalToggle(setShowSeeCrewmenModal, setCrewSeeCrewmenModal, crew)

    const addCrew = (name: string) => {
        return async () => {
            await crewServices.createCrew(name)
            setShowAddCrewModal(prev => !prev)
            fetch()
        }
    }

    const editCrew = (id: string, name: string) => {
        return async () => {
            await crewServices.editCrew(id, name)
            setShowEditCrewModal(prev => !prev)
            fetch()
        }
    }

    const addCrewmanToCrew = (crewmanId: string, crew: ICrew, setShowModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        return async () => {
            await crewServices.addCrewmanToCrew(crewmanId, crew)
            const crews = await crewServices.getCrews()
            setCrews(crews)
            showSeeCrewmenModalToggle(crews.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            showSeeCrewmenModalToggle(crews.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            setShowModal(prev => !prev)
        }
    }

    const removeCrewmanFromCrewFactory = (crew: ICrew, crewman: ICrewman, setShowModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        return async () => {
            await crewServices.removeCrewmanFromCrew(crew, crewman)
            const crews = await crewServices.getCrews()
            setCrews(crews)
            showSeeCrewmenModalToggle(crews.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            showSeeCrewmenModalToggle(crews.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            setShowModal(prev => !prev)
        }
    }

    const deleteCrew = (id: string) => {
        return async () => {
            console.log(id)
            console.log('Tentando deletar crew')
            await crewServices.deleteCrew(id)
            setShowDeleteCrewModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const crews = await crewServices.getCrews()
        setCrews(crews)
        const crewmen = await crewmanServices.getCrewmen()
        setCrewmen(crewmen)
    }

    useEffect(() => {
        fetch()
    }, [])

    return {
        crewmen: crewmenState,
        crews: crewsState,
        showAddCrewModal,
        showEditCrewModal,
        crewEditModal,
        showDeleteCrewModal,
        crewDeleteModal,
        showSeeCrewmenModal,
        crewSeeCrewmenModal,
        showAddCrewModalToggle,
        showEditCrewModalToggle,
        showDeleteCrewModalToggle,
        showSeeCrewmenModalToggle,
        addCrew,
        editCrew,
        addCrewmanToCrew,
        removeCrewmanFromCrewFactory,
        deleteCrew
    }
}