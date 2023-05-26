import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { GoToRocketsCard } from "../components/launchComponents/GoToRocketsCards"
import { LaunchCard } from "../components/launchComponents/LaunchCard"
import { ILaunch } from "../interfaces/ILaunch"
import axios from "axios"
import { MoreInfoModal } from "../components/launchComponents/MoreInfoModal"
import { EditLaunchModal } from "../components/launchComponents/EditLaunchModal"
import { DeleteLaunchModal } from "../components/launchComponents/DeleteLaunchModal"

export const Launches = () => {
    const [launches, setLaunches] = useState([] as ILaunch[])
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

    const editLaunch = (launch: ILaunch) => {
        return async () => {
            console.log(launch)
            await axios.put(`http://localhost:3333/launch/${launch.id}`, {
                launch_code: launch.launch_code,
                date: launch.date,
                success: launch.success
            })
            setShowEditLaunchModal(prev => !prev)
            fetch()
        }
    }

    const deleteLaunch = (id: string) => {
        return async () => {
            await axios.delete(`http://localhost:3333/launch/${id}`)
            setShowDeleteLaunchModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const got  = await axios.get('http://localhost:3333/launch')
        console.log(got.data)
        setLaunches(got.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Navbar />
            <Grid>
                { launches.map(launch => <LaunchCard id={launch.id} launchCode={launch.launch_code} rocketName={launch.rocket.name} infoButton={showMoreInfoModalToggle(launch)} editButton={showEditLaunchModalToggle(launch)} deleteButton={showDeleteLaunchModalToggle(launch)} />) }
                <GoToRocketsCard />
                { showMoreInfoModal && <MoreInfoModal launch={launchMoreInfoModal} close={showMoreInfoModalToggle(launchMoreInfoModal)} /> }
                { showEditLaunchModal && <EditLaunchModal launch={launchEditModal} close={showEditLaunchModalToggle(launchEditModal)} editLaunch={editLaunch} />}
                { showDeleteLaunchModal && <DeleteLaunchModal launch={launchDeleteModal} close={showDeleteLaunchModalToggle(launchDeleteModal)} deleteLaunch={deleteLaunch} />}
            </Grid>
            <Footer />
        </>
    )
}