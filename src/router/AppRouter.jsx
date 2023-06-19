import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>

        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DcPage/>}/>

            <Route path="search" element={<SearchPage/>}/>
            <Route path="hero" element={<HeroPage/>}/>

            <Route path="login" element={<LoginPage/>}/>
            <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
