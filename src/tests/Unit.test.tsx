import React from 'react'
import { render, screen } from '@testing-library/react'
import { UsersData, H_3, UL, LI, Scroll, A } from '../blocks/styles/users'

describe('be in document styled components', () => {
    it('have heading', () => {
        render(<H_3 />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
    it('have div user data', () => {
        render(<UsersData data-testid="div"/>)
        expect(screen.getByTestId('div')).toBeInTheDocument()
    })
    it('have UL', () => {
        render(<UL />)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    it('have LI', () => {
        render(<LI data-testid="li"/>)
        expect(screen.getByTestId('li')).toBeInTheDocument()
    })
    it('have view bar', () => {
        render(<Scroll data-testid="view-bar"/>)
        expect(screen.getByTestId('view-bar')).toBeInTheDocument()
    })
    it('have links', () => {
        render(<A data-testid="link"/>)
        expect(screen.getByTestId('link')).toBeInTheDocument()
    })
})
