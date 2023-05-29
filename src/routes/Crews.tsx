import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { CrewCard } from "../components/crewComponents/CrewCard"
import { DeleteCrewModal } from "../components/crewComponents/DeleteCrewModal"
import { AddCrewCard } from "../components/crewComponents/AddCrewCard"
import { SeeCrewmenModal } from "../components/crewComponents/SeeCrewmenModal"
import { AddCrewModal } from "../components/crewComponents/AddCrewModal"
import { EditCrewModal } from "../components/crewComponents/EditCrewModal"
import { useCrews } from "../hooks/useCrews"

export const Crews = () => {
    const props = useCrews()

    return (
        <>
            <Navbar />
            <Grid>
                { props.crews.map(crew => <CrewCard id={crew.id} name={crew.name} seeCrewmanButton={props.showSeeCrewmenModalToggle(crew)} editButton={props.showEditCrewModalToggle(crew)} deleteButton={props.showDeleteCrewModalToggle(crew)} />) }
                <AddCrewCard addCrewBtn={props.showAddCrewModalToggle} />
                { props.showAddCrewModal && <AddCrewModal close={props.showAddCrewModalToggle} addCrew={props.addCrew} /> }
                { props.showEditCrewModal && <EditCrewModal crew={props.crewEditModal} close={props.showEditCrewModalToggle(props.crewEditModal)} editCrew={props.editCrew} /> }
                { props.showDeleteCrewModal && <DeleteCrewModal crew={props.crewDeleteModal} close={props.showDeleteCrewModalToggle(props.crewDeleteModal)} deleteCrew={props.deleteCrew} /> }
                { props.showSeeCrewmenModal && <SeeCrewmenModal allCrewmen={props.crewmen} crew={props.crewSeeCrewmenModal} close={props.showSeeCrewmenModalToggle(props.crewSeeCrewmenModal)} removeCrewmanFromCrewFactory={props.removeCrewmanFromCrewFactory} addCrewmanToCrew={props.addCrewmanToCrew} />}
            </Grid>
            <Footer />
        </>
    )
}