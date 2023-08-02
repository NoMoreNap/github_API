import React from 'react'
import { useState, useRef } from 'react'
import { Wrapper, Logo, Input, Button } from './styles/main'
import { Page } from './pagination'

export function Centerblock(): JSX.Element {
    const [value, setValue] = useState('')
    const inputElement = useRef<HTMLInputElement>(null)
    const getUsers = (): void => {
        if (inputElement.current) setValue(inputElement.current.value)
    }
    return (
        <Wrapper>
            <Logo src='./img/github_logo.png'></Logo>
            <Input ref={inputElement} placeholder='Введите никнейм' />
            <Button onClick={getUsers}>Найти пользователей</Button>
            {value !== '' ? <Page value={value} /> : <></>}
        </Wrapper>
    )
}
