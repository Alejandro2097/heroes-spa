import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../../auth"
import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>

            <Route path="login" element={<LoginPage/>}/>
            <Route path="/*" element={<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
