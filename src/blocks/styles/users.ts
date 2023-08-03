import styled from 'styled-components'

export const UsersData = styled.div`
    width: 700px;
`
export const H_3 = styled.h3`
    color: white;
    text-align: center;
`
export const UL = styled.ul`
    list-style-type: none;
    padding: 0;
    overflow: hidden;
`
export const Scroll = styled.div`
    max-width: 700px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
`
export const LI = styled.li`
    color: white;
    text-align: center;
    & > * {
        text-decoration: none;
        color: white;
        transition: 0.3s color ease;
        &:hover {
            color: grey;
        }
    }
`
export const Nav = styled.section`
    display: flex;
    justify-content: center;
    gap: 1rem;
`
export const NavBtn = styled.img`
    height: 50px;
    width: 50px;
    transition: 0.3s;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
`
export const Pages = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > * {
        font-weight: 500;
        display: block;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s color ease;
        &:hover {
            color: grey;
        }
    }
`
export const A = styled.a`
    cursor: pointer;
`
export const InputCheckbox = styled.input`
    display: none;
`
export const ToddleDiv = styled.div``
export const ToggleLabel = styled.label`
    cursor: pointer;
`
export const ToggleP = styled.p``
