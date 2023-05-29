import { Footer } from "../components/Footer";
import { Grid } from "../components/Grid";
import { Navbar } from "../components/Navbar";
import { RocketCard } from '../components/rocketComponents/RocketCard';
import { AddRocketCard } from "../components/rocketComponents/AddRocketCard";
import { useEffect, useState } from "react";
import { AddRocketModal } from "../components/rocketComponents/AddRocketModal";
import { EditRocketModal } from "../components/rocketComponents/EditRocketModal";
import { DeleteRocketModal } from "../components/rocketComponents/DeleteRocketModal";
import { IRocket } from "../interfaces/IRocket"
import axios from "axios";
import { LaunchRocketModal } from "../components/rocketComponents/LaunchRocketModal";
import { useNavigate } from "react-router-dom";
import { ICrew } from "../interfaces/ICrew";

export const Rockets = () => {
    const navigate = useNavigate()

    const [crews, setCrews] = useState([] as ICrew[])
    const [rockets, setRockets] = useState([] as IRocket[])
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
            await axios.post('http://localhost:3333/rocket', { name })
            setShowAddRocketModal(prev => !prev)
            fetch()
        }
    }

    const editRocket = (id: string, name: string) => {
        return async () => {
            await axios.put(`http://localhost:3333/rocket/${id}`, { name })
            setShowEditRocketModal(prev => !prev)
            fetch()
        }
    }

    const deleteRocket = (id: string) => {
        return async () => {
            await axios.delete(`http://localhost:3333/rocket/${id}`)
            setShowDeleteRocketModal(prev => !prev)
            fetch()
        }
    }

    const launchRocket = (rocket_id: string, launch: any) => {
        const new_launch = {
            rocket: rocket_id,
            ...launch
        }
        return async () => {
            await axios.post('http://localhost:3333/launch', new_launch)
            setShowLaunchRocketModal(prev => !prev)
            fetch()
            navigate('/launches')
        }
    }

    const fetch = async () => {
        const got  = await axios.get('http://localhost:3333/rocket')
        setRockets(got.data)
        const got_crews = await axios.get('http://localhost:3333/crew')
        setCrews(got_crews.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Navbar />
            <Grid>
                { rockets.map(rocket => <RocketCard id={rocket.id} name={rocket.name} launchButton={showLaunchRocketModalToggle(rocket)} editButton={showEditRocketModalToggle(rocket)} deleteButton={showDeleteRocketModalToggle(rocket)} />) }
                <AddRocketCard addRocketBtn={showAddRocketModalToggle} />
                { showAddRocketModal && <AddRocketModal close={showAddRocketModalToggle} addRocket={addRocket}/> }
                { showEditRocketModal && <EditRocketModal rocket={rocketEditModal} close={showEditRocketModalToggle(rocketEditModal)} editRocket={editRocket} /> }
                { showDeleteRocketModal && <DeleteRocketModal rocket={rocketDeleteModal} close={showDeleteRocketModalToggle(rocketDeleteModal)} deleteRocket={deleteRocket} />}
                { showLaunchRocketModal && <LaunchRocketModal allCrews={crews} rocket={rocketLaunchModal} close={showLaunchRocketModalToggle(rocketLaunchModal)} addLaunch={launchRocket} />}
            </Grid>
            <Footer />
        </>
    )
}