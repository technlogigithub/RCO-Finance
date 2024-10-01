import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { Carousels } from "./components/shared/Carousels"
import { Button } from "./components/ui/button"



function App() {


  return (
    <div className="bg-hero-pattern w-full h-[700px] 2xl:h-[912px] bg-top bg-cover bg-no-repeat">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
