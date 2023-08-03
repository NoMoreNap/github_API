import React from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper, Logo } from './styles/main'
import { useGetByIdQuery } from '../reducers/api'
import { type baseQueryResponseProf } from '../types'
import { UL, LI } from './styles/users'

export function Userblock(): JSX.Element {
    const { id } = useParams()
    const { data, isLoading } = useGetByIdQuery<baseQueryResponseProf>(id as string)
    if (!data || isLoading) return <></>
    const profileClick = () => {
        window.location.href = data.html_url
    }
    return (
        <Wrapper>
            <Logo src={data.avatar_url} onClick={profileClick}></Logo>
            <UL>
                <LI>Никнейм: {data.login}</LI>
                <LI>Кол-во репо: {data.public_repos}</LI>
                <LI>Кол-во подписчиков: {data.followers}</LI>
            </UL>
        </Wrapper>
    )
}
