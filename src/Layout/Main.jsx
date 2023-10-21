import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'

const Main = () => {
  return (
<div className="max-w-7xl mx-auto">
  <Navbar />
  <Outlet />
  <Footer />
</div>

  )
}

export default Main
