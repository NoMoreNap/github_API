import React from 'react'
import { useState, useRef } from 'react'
import { Wrapper, Logo, Input, Button } from './styles/main'
import { InputCheckbox, ToddleDiv, ToggleLabel, ToggleP } from './styles/users'
import { Page } from './pagination'

export function Centerblock(): JSX.Element {
    const [desc, setDesc] = useState(false)
    const [value, setValue] = useState('')
    const inputElement = useRef<HTMLInputElement>(null)
    const getUsers = (): void => {
        if (inputElement.current) setValue(inputElement.current.value)
    }
    const byDesc = () => {
        setDesc(!desc)
    }
    return (
        <Wrapper>
            <Logo src='./img/github_logo.png'></Logo>
            <Input ref={inputElement} placeholder='Введите никнейм' />
            <Button onClick={getUsers}>Найти пользователей</Button>
            {value === '' ? (
                <ToddleDiv>
                    <ToggleLabel htmlFor='order'>
                        <ToggleP>{desc ? '✅' : '⬜'}По убыванию</ToggleP>
                    </ToggleLabel>
                    <InputCheckbox onChange={byDesc} type='checkbox' id='order' />
                </ToddleDiv>
            ) : (
                <></>
            )}
            {value !== '' ? <Page value={value} desc={desc} /> : <></>}
        </Wrapper>
    )
}
