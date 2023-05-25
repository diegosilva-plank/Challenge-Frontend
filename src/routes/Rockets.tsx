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

export const Rockets = () => {
    const [showEditRocketModal, setShowEditRocketModal] = useState(false)
    const [rocketEditModal, setRocketEditModal] = useState({} as IRocket)
    const [showDeleteRocketModal, setShowDeleteRocketModal] = useState(false)
    const [rocketDeleteModal, setRocketDeleteModal] = useState({} as IRocket)
    const [showAddRocketModal, setShowAddRocketModal] = useState(false)
    const [rockets, setRockets] = useState([] as IRocket[])

    const showAddRocketModalToggle = () => {
        setShowAddRocketModal(prev => !prev)
    }

    const showEditRocketModalToggle = (rocket: IRocket) => {
        return () => {
            setRocketEditModal(rocket)
            setShowEditRocketModal(prev => !prev)
        }
    }

    const showDeleteRocketModalToggle = (rocket: IRocket) => {
        return () => {
            setRocketDeleteModal(rocket)
            setShowDeleteRocketModal(prev => !prev)
        }
    }

    const deleteRocket = (id: string) => {
        return async () => {
            await axios.delete(`http://localhost:3333/rocket/${id}`)
            setShowDeleteRocketModal(prev => !prev)
            fetch()
        }
    }

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
                { rockets.map(rocket => <RocketCard id={rocket.id} name={rocket.name} deleteButton={showDeleteRocketModalToggle(rocket)} editButton={showEditRocketModalToggle(rocket)} />) }
                <AddRocketCard addRocketBtn={showAddRocketModalToggle} />
                { showAddRocketModal && <AddRocketModal close={showAddRocketModalToggle} addRocket={addRocket}/> }
                { showEditRocketModal && <EditRocketModal rocket={rocketEditModal} close={showEditRocketModalToggle(rocketEditModal)} editRocket={editRocket} /> }
                { showDeleteRocketModal && <DeleteRocketModal rocket={rocketDeleteModal} close={showDeleteRocketModalToggle(rocketDeleteModal)} deleteRocket={deleteRocket} />}
            </Grid>
            <Footer />
        </>
    )
}