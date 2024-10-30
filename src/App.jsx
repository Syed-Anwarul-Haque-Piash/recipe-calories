import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Cooks from "./components/Cooks/Cooks"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Recipies from "./components/Recipies/Recipies"


function App() {
  const [cooks,setCooks]=useState([])
  const handleCook=(cook)=>{
    setCooks([...cooks,cook])
  }

  return (
    <div className="max-w-7xl mx-auto">
     <Header></Header>
     <Banner></Banner>
     <Home></Home>
     <div className="md:flex">
      <Recipies  handleCook={handleCook}></Recipies>
      <Cooks cooks={cooks}></Cooks>
     </div>
    </div>
  )
}

export default App
