import { Footer } from "../components/Footer";
import { Grid } from "../components/Grid";
import { Navbar } from "../components/Navbar";
import { RocketCard } from '../components/rocketComponents/RocketCard';
import { AddRocketCard } from "../components/rocketComponents/AddRocketCard";
import { useEffect, useState } from "react";
import { AddRocketModal } from "../components/rocketComponents/AddRocketModal";
import { v4 as uuid } from 'uuid'
import { EditRocketModal } from "../components/rocketComponents/EditRocketModal";
import { DeleteRocketModal } from "../components/rocketComponents/DeleteRocketModal";
import { IRocket } from "../interfaces/IRocket"
import axios from "axios";
import { ILaunch } from "../interfaces/ILaunch";
import { LaunchRocketModal } from "../components/rocketComponents/LaunchRocketModal";
import { Route, redirect, useNavigate } from "react-router-dom";

export const Rockets = () => {
    const navigate = useNavigate()

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
        const new_rocket = {
            id: uuid(),
            name
        }
        return async () => {
            await axios.post('http://localhost:3333/rocket', new_rocket)
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

    const launchRocket = (rocket_id: string, launch: Partial<Omit<ILaunch, 'id'>>) => {
        const new_launch = {
            rocket: rocket_id,
            crew: "da8c64a2-f50e-4cf2-a661-6ac4668ce7c5",
            ...launch
        }
        return async () => {
            await axios.post('http://localhost:3333/launch', new_launch)
            console.log(new_launch)
            console.log('clicked confirm')
            setShowLaunchRocketModal(prev => !prev)
            fetch()
            navigate('/launches')
        }
    }

    const fetch = async () => {
        const got  = await axios.get('http://localhost:3333/rocket')
        console.log(got.data)
        setRockets(got.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    console.log('loaded')

    return (
        <>
            <Navbar />
            <Grid>
                { rockets.map(rocket => <RocketCard id={rocket.id} name={rocket.name} launchButton={showLaunchRocketModalToggle(rocket)} editButton={showEditRocketModalToggle(rocket)} deleteButton={showDeleteRocketModalToggle(rocket)} />) }
                <AddRocketCard addRocketBtn={showAddRocketModalToggle} />
                { showAddRocketModal && <AddRocketModal close={showAddRocketModalToggle} addRocket={addRocket}/> }
                { showEditRocketModal && <EditRocketModal rocket={rocketEditModal} close={showEditRocketModalToggle(rocketEditModal)} editRocket={editRocket} /> }
                { showDeleteRocketModal && <DeleteRocketModal rocket={rocketDeleteModal} close={showDeleteRocketModalToggle(rocketDeleteModal)} deleteRocket={deleteRocket} />}
                { showLaunchRocketModal && <LaunchRocketModal rocket={rocketLaunchModal} close={showLaunchRocketModalToggle(rocketLaunchModal)} addLaunch={launchRocket} />}
            </Grid>
            <Footer />
        </>
    )
}