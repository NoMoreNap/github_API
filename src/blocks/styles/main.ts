import styled from 'styled-components'

export const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: white;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
export const Logo = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    cursor: pointer;
`
export const Input = styled.input`
    appearance: none;
    outline: none;
    width: 300px;
    height: 20px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 13px;
    font-size: 1rem;
    color: white;
    background-color: rgba(209, 209, 209, 0.1);
`
export const Button = styled.button`
    appearance: none;
    outline: none;
    border: none;
    width: 300px;
    height: fit-content;
    border-radius: 8px;
    padding: 13px;
    font-size: 1rem;
    color: white;
    background-color: rgba(209, 209, 209, 0.4);
    transition: 0.3s background-color ease;
    cursor: pointer;
    &:hover {
        background-color: rgba(209, 209, 209, 0.9);
    }
`
