import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

export default function FrontLayout () {
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