/* eslint-disable react/react-in-jsx-scope */
import { useGetUsersAscQuery, useGetUsersDescQuery } from '../reducers/api'
import { baseQueryResponse, ItemsResponse } from '../types'
import { UsersData, H_3, UL, LI, Scroll, A } from './styles/users'
import React, { useState } from 'react'
import { Nav } from './Nav'
import { useNavigate } from 'react-router-dom'

export function Page({ value, desc }: { value: string, desc: boolean }): JSX.Element {
    const { data, isLoading } = !desc ? useGetUsersAscQuery<baseQueryResponse>(value) : useGetUsersDescQuery<baseQueryResponse>(value)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1) // задаем начальную страницу
    const [itemsCount] = useState(10) // количество ников, которые будут отображаться

    if (!data || isLoading) return <></>
    let { items } = data
    const lastIndex = currentPage * itemsCount // последний индекс
    const firstIndex = lastIndex - itemsCount // первый индекс
    items = items.slice(firstIndex, lastIndex)

    const paginator = (pageNumber: number): void => setCurrentPage(pageNumber)
    const getProfileInfo = (e: React.MouseEvent): void => {
        if (!(e.target instanceof HTMLElement)) {
            return
        }
        e.preventDefault()
        const id = e.target.dataset.id
        navigate(`/${id}`)
    }


    return (
        <UsersData role='header'>
            <H_3>Все пользователи с именем {value}: </H_3>
            <UL>
                <Scroll>
                    {items.map((el: ItemsResponse) => {
                        return (
                            <LI key={((Math.random() * 10000) >> 0).toString(16)}>
                                <A onClick={getProfileInfo} data-id={el.id}>
                                    {el.login}
                                </A>
                            </LI>
                        )
                    })}
                </Scroll>
            </UL>
            <Nav perPage={itemsCount} totalCount={data.items.length} paginator={paginator} />
        </UsersData>
    )
}
