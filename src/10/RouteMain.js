import { BrowserRouter, Route, Routes } from "react-router-dom"
import RouteNav from "./RouteNav"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"

const RouteMain = () => {
  return (
    <BrowserRouter>
      <main className="container">
          <h1 className="text-2xl font-bold text-center mx-5 my-10">react-route-dom</h1>
          <RouteNav/>
        <Routes>
          <Route path="/" element={<RouteHome/>}/>
          <Route path="/page1" element={<RoutePage1/>}/>
          <Route path="/page2" element={<RoutePage2/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default RouteMain
