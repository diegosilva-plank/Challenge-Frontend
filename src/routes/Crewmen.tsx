import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { CrewmanCard } from "../components/crewmanComponents/CrewmanCard"
import { AddCrewmanCard } from "../components/crewmanComponents/AddCrewmanCard"
import { SeeCrewsModal } from "../components/crewmanComponents/SeeCrewsModal"
import { EditCrewmanModal } from "../components/crewmanComponents/EditCrewmanModal"
import { DeleteCrewmanModal } from "../components/crewmanComponents/DeleteCrewmanModal"
import { AddCrewmanModal } from "../components/crewmanComponents/AddCrewmanModal"
import { useCrewmen } from "../hooks/useCrewmen"

export const Crewmen = () => {
    const props = useCrewmen()

    return (
        <>
            <Navbar />
            <Grid>
                { props.crewmen.map(crewman => <CrewmanCard id={crewman.id} name={crewman.name} patent={crewman.patent} seeCrewsButton={props.showSeeCrewsModalToggle(crewman)} editButton={props.showEditCrewmanModalToggle(crewman)} deleteButton={props.showDeleteCrewmanModalToggle(crewman)} />) }
                <AddCrewmanCard addCrewmanBtn={props.showAddCrewmanModalToggle} />
                { props.showAddCrewmanModal && <AddCrewmanModal close={props.showAddCrewmanModalToggle} addCrewman={props.addCrewman} /> }
                { props.showSeeCrewsModal && <SeeCrewsModal crewman={props.crewmanSeeCrewsModal} close={props.showSeeCrewsModalToggle(props.crewmanSeeCrewsModal)} /> }
                { props.showEditCrewmanModal && <EditCrewmanModal crewman={props.crewmanEditModal} close={props.showEditCrewmanModalToggle(props.crewmanEditModal)} editCrewman={props.editCrewman} /> }
                { props.showDeleteCrewmanModal && <DeleteCrewmanModal crewman={props.crewmanDeleteModal} close={props.showDeleteCrewmanModalToggle(props.crewmanDeleteModal)} deleteCrewman={props.deleteCrewman} /> }
            </Grid>
            <Footer />
        </>
    )
}