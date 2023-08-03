import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Centerblock } from './blocks/centerblock'
import { Userblock } from './blocks/userblock'

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<Centerblock />}></Route>
            <Route path='/:id' element={<Userblock />}></Route>
        </Routes>
    )
}
