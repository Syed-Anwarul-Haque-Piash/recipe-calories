import Banner from "./components/Banner/Banner"
import Cooks from "./components/Cooks/Cooks"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Recipies from "./components/Recipies/Recipies"


function App() {
  

  return (
    <div className="max-w-7xl mx-auto">
     <Header></Header>
     <Banner></Banner>
     <Home></Home>
     <div className="md:flex">
      <Recipies></Recipies>
      <Cooks></Cooks>
     </div>
    </div>
  )
}

export default App
