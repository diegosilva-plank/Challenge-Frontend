import axios from "axios"
import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { CrewmanCard } from "../components/cremanComponents/CrewmanCard"
import { useEffect, useState } from "react"
import { ICrewman } from "../interfaces/ICrewman"
import { AddCrewmanCard } from "../components/cremanComponents/AddCrewmanCard"
import { SeeCrewsModal } from "../components/cremanComponents/SeeCrewsModal"
import { EditCrewmanModal } from "../components/cremanComponents/EditCrewmanModa"
import { DeleteCrewmanModal } from "../components/cremanComponents/DeleteCrewmanModa"
import { AddCrewmanModal } from "../components/cremanComponents/AddCrewmanModal"

export const Crewmen = () => {
    const [crewmen, setCrewmen] = useState([] as ICrewman[])
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
            await axios.post(`http://localhost:3333/crewman`, { name, patent })
            setShowAddCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const editCrewman = (id: string, name: string, patent: string) => {
        return async () => {
            await axios.put(`http://localhost:3333/crewman/${id}`, { name, patent })
            setShowEditCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const deleteCrewman = (id: string) => {
        return async () => {
            await axios.delete(`http://localhost:3333/crewman/${id}`)
            setShowDeleteCrewmanModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const got  = await axios.get('http://localhost:3333/crewman')
        console.log(got.data)
        setCrewmen(got.data)
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <>
            <Navbar />
            <Grid>
                { crewmen.map(crewman => <CrewmanCard id={crewman.id} name={crewman.name} patent={crewman.patent} seeCrewsButton={showSeeCrewsModalToggle(crewman)} editButton={showEditCrewmanModalToggle(crewman)} deleteButton={showDeleteCrewmanModalToggle(crewman)} />) }
                <AddCrewmanCard addCrewmanBtn={showAddCrewmanModalToggle} />
                { showAddCrewmanModal && <AddCrewmanModal close={showAddCrewmanModalToggle} addCrewman={addCrewman} /> }
                { showSeeCrewsModal && <SeeCrewsModal crewman={crewmanSeeCrewsModal} close={showSeeCrewsModalToggle(crewmanSeeCrewsModal)} /> }
                { showEditCrewmanModal && <EditCrewmanModal crewman={crewmanEditModal} close={showEditCrewmanModalToggle(crewmanEditModal)} editCrewman={editCrewman} /> }
                { showDeleteCrewmanModal && <DeleteCrewmanModal crewman={crewmanDeleteModal} close={showDeleteCrewmanModalToggle(crewmanDeleteModal)} deleteCrewman={deleteCrewman} /> }
            </Grid>
            <Footer />
        </>
    )
}