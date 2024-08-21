import BestAppartment from "./components/BestAppartment/BestAppartment"
import BestDeal from "./components/BestDeal/BestDeal"
import Contact from "./components/Contact/Contact"
import Counters from "./components/Counters/Counters"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import Properties from "./components/Properties/Properties"
import Slider from "./components/Slider/Slider"
import SubHeader from "./components/SubHeader/SubHeader"
import VideoView from "./components/VideoView/VideoView"

function App() {

  return (
    <>
      <SubHeader />
      <NavBar />
      <Slider />
      <BestAppartment />
      <VideoView />
      <Counters />
      <BestDeal />
      <Properties />
      <Contact />
      <Footer />
    </>
  )
}

export default App
