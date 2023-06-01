import '../css/index.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div id="rocket-img-div">
        <img id="rocket-img" src="../public/rocket.gif" />
      </div>
      <Footer />
    </>
  )
}
