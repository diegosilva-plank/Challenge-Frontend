import { useEffect, useState } from "react"
import { ICrew } from "../interfaces/ICrew"
import { ILaunch } from "../interfaces/ILaunch"
import { launchServices } from "../services/launchServices"
import { crewServices } from "../services/crewServices"

export const useLaunches = () => {
    const [crewsState, setCrews] = useState([] as ICrew[])
    const [launchesState, setLaunches] = useState([] as ILaunch[])
    const [showMoreInfoModal, setShowMoreInfoModal] = useState(false)
    const [launchMoreInfoModal, setLaunchMoreInfoModal] = useState({} as ILaunch)
    const [showEditLaunchModal, setShowEditLaunchModal] = useState(false)
    const [launchEditModal, setLaunchEditModal] = useState({} as ILaunch)
    const [showDeleteLaunchModal, setShowDeleteLaunchModal] = useState(false)
    const [launchDeleteModal, setLaunchDeleteModal] = useState({} as ILaunch)

    const showModalToggle = (setShow: (value: React.SetStateAction<boolean>) => void, setLaunch?: (value: React.SetStateAction<ILaunch>) => void, launch?: ILaunch) => {
        return () => {
            if (setLaunch && launch) setLaunch(launch)
            setShow(prev => !prev)
        }
    }

    const showMoreInfoModalToggle = (launch: ILaunch) => showModalToggle(setShowMoreInfoModal, setLaunchMoreInfoModal, launch)
    const showEditLaunchModalToggle = (launch: ILaunch) => showModalToggle(setShowEditLaunchModal, setLaunchEditModal, launch)
    const showDeleteLaunchModalToggle = (launch: ILaunch) => showModalToggle(setShowDeleteLaunchModal, setLaunchDeleteModal, launch)

    const editLaunch = (launch: any) => {
        return async () => {
            await launchServices.editLaunch(launch)
            setShowEditLaunchModal(prev => !prev)
            fetch()
        }
    }

    const deleteLaunch = (id: string) => {
        return async () => {
            await launchServices.deleteLaunch(id)
            setShowDeleteLaunchModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const launches = await launchServices.getLaunches()
        setLaunches(launches)
        const crews = await crewServices.getCrews()
        setCrews(crews)
    }

    useEffect(() => {
        fetch()
    }, [])

    return {
        crews: crewsState,
        launches: launchesState,
        showMoreInfoModal,
        launchMoreInfoModal,
        showEditLaunchModal,
        launchEditModal,
        showDeleteLaunchModal,
        launchDeleteModal,
        showMoreInfoModalToggle,
        showEditLaunchModalToggle,
        showDeleteLaunchModalToggle,
        editLaunch,
        deleteLaunch
    }
}