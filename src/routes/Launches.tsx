import { Footer } from "../components/Footer"
import { Grid } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import { GoToRocketsCard } from "../components/launchComponents/GoToRocketsCards"
import { LaunchCard } from "../components/launchComponents/LaunchCard"
import { MoreInfoModal } from "../components/launchComponents/MoreInfoModal"
import { EditLaunchModal } from "../components/launchComponents/EditLaunchModal"
import { DeleteLaunchModal } from "../components/launchComponents/DeleteLaunchModal"
import { useLaunches } from "../hooks/useLaunches"

export const Launches = () => {
    const props = useLaunches()

    return (
        <>
            <Navbar />
            <Grid>
                { props.launches.map(launch => <LaunchCard id={launch.id} launchCode={launch.launch_code} rocketName={launch.rocket.name} infoButton={props.showMoreInfoModalToggle(launch)} editButton={props.showEditLaunchModalToggle(launch)} deleteButton={props.showDeleteLaunchModalToggle(launch)} />) }
                <GoToRocketsCard />
                { props.showMoreInfoModal && <MoreInfoModal launch={props.launchMoreInfoModal} close={props.showMoreInfoModalToggle(props.launchMoreInfoModal)} /> }
                { props.showEditLaunchModal && <EditLaunchModal allCrews={props.crews} launch={props.launchEditModal} close={props.showEditLaunchModalToggle(props.launchEditModal)} editLaunch={props.editLaunch} />}
                { props.showDeleteLaunchModal && <DeleteLaunchModal launch={props.launchDeleteModal} close={props.showDeleteLaunchModalToggle(props.launchDeleteModal)} deleteLaunch={props.deleteLaunch} />}
            </Grid>
            <Footer />
        </>
    )
}