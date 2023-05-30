import { Footer } from '../components/Footer'
import { Grid } from '../components/Grid'
import { Navbar } from '../components/Navbar'
import { RocketCard } from '../components/rocketComponents/RocketCard'
import { AddRocketCard } from '../components/rocketComponents/AddRocketCard'
import { AddRocketModal } from '../components/rocketComponents/AddRocketModal'
import { EditRocketModal } from '../components/rocketComponents/EditRocketModal'
import { DeleteRocketModal } from '../components/rocketComponents/DeleteRocketModal'
import { LaunchRocketModal } from '../components/rocketComponents/LaunchRocketModal'
import { useRockets } from '../hooks/useRockets'

export const Rockets = () => {
  const props = useRockets()

  return (
    <>
      <Navbar />
      <Grid>
        {props.rockets.map(rocket => (
          <RocketCard
            id={rocket.id}
            name={rocket.name}
            launchButton={props.showLaunchRocketModalToggle(rocket)}
            editButton={props.showEditRocketModalToggle(rocket)}
            deleteButton={props.showDeleteRocketModalToggle(rocket)}
          />
        ))}
        <AddRocketCard addRocketBtn={props.showAddRocketModalToggle} />
        {props.showAddRocketModal && (
          <AddRocketModal
            close={props.showAddRocketModalToggle}
            addRocket={props.addRocket}
          />
        )}
        {props.showEditRocketModal && (
          <EditRocketModal
            rocket={props.rocketEditModal}
            close={props.showEditRocketModalToggle(props.rocketEditModal)}
            editRocket={props.editRocket}
          />
        )}
        {props.showDeleteRocketModal && (
          <DeleteRocketModal
            rocket={props.rocketDeleteModal}
            close={props.showDeleteRocketModalToggle(props.rocketDeleteModal)}
            deleteRocket={props.deleteRocket}
          />
        )}
        {props.showLaunchRocketModal && (
          <LaunchRocketModal
            allCrews={props.crews}
            rocket={props.rocketLaunchModal}
            close={props.showLaunchRocketModalToggle(props.rocketLaunchModal)}
            addLaunch={props.launchRocket}
          />
        )}
      </Grid>
      <Footer />
    </>
  )
}
