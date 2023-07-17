import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute/>', () => {
    test('debe de mostrar el children si no esta autenticado', () =>{
        const contextValue = {
            logged: false,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='marvel' element={
                            <PublicRoute>
                                <h1>Pagina marvel</h1>
                            </PublicRoute>
                        }/>
                    </Routes>
                    <PublicRoute>
                        <h1>Ruta publica</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });
    
});