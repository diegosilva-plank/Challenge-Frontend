import { Footer } from "../components/Footer";
import { Grid } from "../components/Grid";
import { Navbar } from "../components/Navbar";
import { RocketCard } from '../components/rocketComponents/RocketCard';
import { rockets } from '../../database/rockets'
import { AddRocketCard } from "../components/rocketComponents/AddRocketCard";
import { useState } from "react";
import { AddRocketModal } from "../components/rocketComponents/AddRocketModal";
import { v4 as uuid } from 'uuid'
import { EditRocketModal } from "../components/rocketComponents/EditRocketModal";
import { DeleteRocketModal } from "../components/rocketComponents/DeleteRocketModal";

export const Rockets = () => {
    const [rocketsState, setRocketsState] = useState({
        showEditRocketModal: false,
        idEditModal: '0',
        showDeleteRocketModal: false,
        idDeleteModal: '0',
        showAddRocketModal: false,
        rockets: rockets
    })

    const showAddRocketModalToggle = () => {
        setRocketsState(state => ({
            ...state,
            showAddRocketModal: !state.showAddRocketModal
        }))
    }

    const showEditRocketModalToggle = (id: string) => {
        return () => {
            setRocketsState(state => ({
                ...state,
                idEditModal: id,
                showEditRocketModal: !state.showEditRocketModal
            }))
        }
    }

    const showDeleteRocketModalToggle = (id: string) => {
        return () => {
            setRocketsState(state => ({
                ...state,
                idDeleteModal: id,
                showDeleteRocketModal: !state.showDeleteRocketModal
            }))
        }
    }

    const deleteRocket = (id: string) => {
        return () => {
            let index = rocketsState.rockets.length
            for (let i = 0; i < rocketsState.rockets.length; i++) {
                if (rocketsState.rockets[i].id === id) index = i
            }
            const new_rockets = [...rocketsState.rockets]
            new_rockets.splice(index, 1)

            setRocketsState(state => ({
                ...state,
                rockets: new_rockets,
                showDeleteRocketModal: !state.showDeleteRocketModal
            }))
        }
    }

    const addRocket = (name: string) => {
        const new_rocket = {
            id: uuid(),
            name
        }
        return () => {
            setRocketsState(state => ({
                ...state,
                showAddRocketModal: !state.showAddRocketModal,
                rockets: [...state.rockets, new_rocket]
            }))
        }
    }

    const editRocket = (id: string, name: string) => {
        return () => {
            let index = rocketsState.rockets.length
            for (let i = 0; i < rocketsState.rockets.length; i++) {
                if (rocketsState.rockets[i].id === id) index = i
            }
            const new_rockets = [...rocketsState.rockets]
            new_rockets[index].name = name

            setRocketsState(state => ({
                ...state,
                showEditRocketModal: !state.showEditRocketModal,
                rockets: new_rockets
            }))
        }
    }

    const rocketsCards = rocketsState.rockets.map(rocket => <RocketCard id={rocket.id} name={rocket.name} deleteButton={showDeleteRocketModalToggle(rocket.id)} editButton={showEditRocketModalToggle(rocket.id)} />) 

    return (
        <>
            <Navbar />
            <Grid>
                { rocketsCards }
                <AddRocketCard addRocketBtn={showAddRocketModalToggle} />
                { rocketsState.showAddRocketModal && <AddRocketModal close={showAddRocketModalToggle} addRocket={addRocket}/> }
                { rocketsState.showEditRocketModal && <EditRocketModal id={rocketsState.idEditModal} close={showEditRocketModalToggle(rocketsState.idEditModal)} editRocket={editRocket} /> }
                { rocketsState.showDeleteRocketModal && <DeleteRocketModal id={rocketsState.idDeleteModal} close={showDeleteRocketModalToggle(rocketsState.idDeleteModal)} deleteRocket={deleteRocket} />}
            </Grid>
            <Footer />
        </>
    )
}