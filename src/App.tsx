import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {


  return (
    <div className="bg-hero-pattern w-full h-[700px] 2xl:h-[1130px] bg-top bg-cover bg-no-repeat">
      <Header/>
      <Outlet/>
      <div className="bg-foreground"><Footer/></div>
    </div>
  )
}

export default App
