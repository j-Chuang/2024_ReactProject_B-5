import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

function FrontLayout () {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default FrontLayout;