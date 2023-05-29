import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ICrew } from "../interfaces/ICrew"
import { IRocket } from "../interfaces/IRocket"
import { rocketServices } from "../services/rocketServices"
import { launchServices } from "../services/launchServices"
import { crewServices } from "../services/crewServices"

export const useRockets = () => {
    const navigate = useNavigate()

    const [crewsState, setCrews] = useState([] as ICrew[])
    const [rocketsState, setRockets] = useState([] as IRocket[])
    const [showEditRocketModal, setShowEditRocketModal] = useState(false)
    const [rocketEditModal, setRocketEditModal] = useState({} as IRocket)
    const [showDeleteRocketModal, setShowDeleteRocketModal] = useState(false)
    const [rocketDeleteModal, setRocketDeleteModal] = useState({} as IRocket)
    const [showLaunchRocketModal, setShowLaunchRocketModal] = useState(false)
    const [rocketLaunchModal, setRocketLaunchModal] = useState({} as IRocket)
    const [showAddRocketModal, setShowAddRocketModal] = useState(false)

    const showModalToggle = (setShow: (value: React.SetStateAction<boolean>) => void, setRocket?: (value: React.SetStateAction<IRocket>) => void, rocket?: IRocket) => {
        return () => {
            if (setRocket && rocket) setRocket(rocket)
            setShow(prev => !prev)
        }
    }
    const showAddRocketModalToggle = showModalToggle(setShowAddRocketModal)
    const showEditRocketModalToggle = (rocket: IRocket) => showModalToggle(setShowEditRocketModal, setRocketEditModal, rocket)
    const showDeleteRocketModalToggle = (rocket: IRocket) => showModalToggle(setShowDeleteRocketModal, setRocketDeleteModal, rocket)
    const showLaunchRocketModalToggle = (rocket: IRocket) => showModalToggle(setShowLaunchRocketModal, setRocketLaunchModal, rocket)

    const addRocket = (name: string) => {
        return async () => {
            await rocketServices.createRocket(name)
            setShowAddRocketModal(prev => !prev)
            fetch()
        }
    }

    const editRocket = (id: string, name: string) => {
        return async () => {
            await rocketServices.editRocket(id, name)
            setShowEditRocketModal(prev => !prev)
            fetch()
        }
    }

    const deleteRocket = (id: string) => {
        return async () => {
            await rocketServices.deleteRocket(id)
            setShowDeleteRocketModal(prev => !prev)
            fetch()
        }
    }

    const launchRocket = (rocket_id: string, launch: any) => {
        return async () => {
            await launchServices.createLauch(rocket_id, launch)
            setShowLaunchRocketModal(prev => !prev)
            fetch()
            navigate('/launches')
        }
    }

    const fetch = async () => {
        const rockets = await rocketServices.getRockets()
        setRockets(rockets)
        const crews = await crewServices.getCrews()
        setCrews(crews)
    }

    useEffect(() => {
        fetch()
    }, [])

    return {
        crews: crewsState,
        rockets: rocketsState,
        showEditRocketModal,
        rocketEditModal,
        showDeleteRocketModal,
        rocketDeleteModal,
        showLaunchRocketModal,
        rocketLaunchModal,
        showAddRocketModal,
        showAddRocketModalToggle,
        showEditRocketModalToggle,
        showDeleteRocketModalToggle,
        showLaunchRocketModalToggle,
        addRocket,
        editRocket,
        deleteRocket,
        launchRocket
    }
}