import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="" element={<LoginPage />} />
            
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>
            <Route path='login' element={
              <PublicRoute>
                <HeroesRoutes/>
              </PublicRoute>
            }/>

            <Route path="/*" element={ <HeroesRoutes />} />
            
            

        </Routes>
    </>
  )
}
