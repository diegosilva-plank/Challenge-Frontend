import axios from "axios"
import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { CrewCard } from "../components/crewComponents/CrewCard"
import { useEffect, useState } from "react"
import { ICrew } from "../interfaces/ICrew"
import { DeleteCrewModal } from "../components/crewComponents/DeleteCrewModal"
import { AddCrewCard } from "../components/crewComponents/AddCrewCard"
import { SeeCrewmenModal } from "../components/crewComponents/SeeCrewmenModal"
import { ICrewman } from "../interfaces/ICrewman"

export const Crews = () => {
    const [crewmen, setCrewmen] = useState([] as ICrewman[])
    const [crews, setCrews] = useState([] as ICrew[])
    const [showSeeCrewmenModal, setShowSeeCrewmenModal] = useState(false)
    const [crewSeeCrewmenModal, setCrewSeeCrewmenModal] = useState({} as ICrew)
    const [showDeleteCrewModal, setShowDeleteCrewModal] = useState(false)
    const [crewDeleteModal, setCrewDeleteModal] = useState({} as ICrew)

    const showModalToggle = (setShow: (value: React.SetStateAction<boolean>) => void, setCrew?: (value: React.SetStateAction<ICrew>) => void, crew?: ICrew) => {
        return () => {
            if (setCrew && crew) setCrew(crew)
            setShow(prev => !prev)
        }
    }

    const showSeeCrewmenModalToggle = (crew: ICrew) => showModalToggle(setShowSeeCrewmenModal, setCrewSeeCrewmenModal, crew)
    const showDeleteCrewModalToggle = (crew: ICrew) => showModalToggle(setShowDeleteCrewModal, setCrewDeleteModal, crew)

    const addCrewmanToCrew = (crewmanId: string, crew: ICrew, setShowModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        return async () => {
            let got = await axios.get('http://localhost:3333/crewman')
            await axios.put(`http://localhost:3333/crew/${crew.id}`, {
                name: crew.name,
                crewmen: [...crew.crewmen, got.data.filter((crewman: ICrewman) => crewman.id == crewmanId)[0]]
            })
            got  = await axios.get('http://localhost:3333/crew')
            setCrews(got.data)
            showSeeCrewmenModalToggle(got.data.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            showSeeCrewmenModalToggle(got.data.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            setShowModal(prev => !prev)
        }
    }

    const removeCrewmanFromCrewFactory = (crew: ICrew, crewman: ICrewman, setShowModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        return async () => {
            await axios.put(`http://localhost:3333/crew/${crew.id}`, {
                name: crew.name,
                crewmen: crew.crewmen.filter(crewman_of_crew => crewman_of_crew.id != crewman.id).map(crewman_of_crew => ({ id: crewman_of_crew.id }))
            })
            const got  = await axios.get('http://localhost:3333/crew')
            setCrews(got.data)
            showSeeCrewmenModalToggle(got.data.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            showSeeCrewmenModalToggle(got.data.filter((crew_filter: ICrew) => crew_filter.id == crew.id)[0])()
            setShowModal(prev => !prev)
        }
    }

    const deleteCrew = (id: string) => {
        return async () => {
            await axios.delete(`http://localhost:3333/crew/${id}`)
            setShowDeleteCrewModal(prev => !prev)
            fetch()
        }
    }

    const fetch = async () => {
        const got_crews  = await axios.get('http://localhost:3333/crew')
        setCrews(got_crews.data)
        const got_crewmen = await axios.get('http://localhost:3333/crewman')
        setCrewmen(got_crewmen.data)
    }

    useEffect(() => {
        fetch()
    }, [])

    useEffect(() => {
        // fetch()
    }, [crews])

    return (
        <>
            <Navbar />
            <Grid>
                { crews.map(crew => <CrewCard id={crew.id} name={crew.name} seeCrewmanButton={showSeeCrewmenModalToggle(crew)} deleteButton={showDeleteCrewModalToggle(crew)} />) }
                <AddCrewCard />
                { showSeeCrewmenModal && <SeeCrewmenModal allCrewmen={crewmen} crew={crewSeeCrewmenModal} close={showSeeCrewmenModalToggle(crewSeeCrewmenModal)} removeCrewmanFromCrewFactory={removeCrewmanFromCrewFactory} addCrewmanToCrew={addCrewmanToCrew} />}
                { showDeleteCrewModal && <DeleteCrewModal crew={crewDeleteModal} close={showDeleteCrewModalToggle(crewDeleteModal)} deleteCrew={deleteCrew} /> }
            </Grid>
            <Footer />
        </>
    )
}