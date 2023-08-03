import React from 'react'
//import { Centerblock } from './centerblock'
import { MainDiv } from './styles/main'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../routes'

export function Main(): JSX.Element {
    return (
        <MainDiv>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </MainDiv>
    )
}
