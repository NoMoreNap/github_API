/* eslint-disable react/react-in-jsx-scope */
import { useGetUsersAscQuery, useGetUsersDescQuery } from '../reducers/api'
import { baseQueryResponse, ItemsResponse } from '../types'
import { UsersData, H_3, UL, LI, Scroll } from './styles/users'
import { useState } from 'react'
import { Nav } from './Nav'

export function Page({ value }: { value: string }): JSX.Element {
    const { data, isLoading } = useGetUsersAscQuery<baseQueryResponse>(value)
    const [currentPage, setCurrentPage] = useState(1) // задаем начальную страницу
    const [itemsCount] = useState(10) // количество ников, которые будут отображаться

    if (!data || isLoading) return <></>
    let { items } = data
    const lastIndex = currentPage * itemsCount // последний индекс
    const firstIndex = lastIndex - itemsCount // первый индекс
    console.log(lastIndex, firstIndex)
    items = items.slice(firstIndex, lastIndex)

    const paginator = (pageNumber: number): void => setCurrentPage(pageNumber)

    return (
        <UsersData>
            <H_3>Все пользователи с именем {value}: </H_3>
            <UL>
                <Scroll>
                    {items.map((el: ItemsResponse) => {
                        return (
                            <LI key={((Math.random() * 10000) >> 0).toString(16)}>
                                <a href={el.html_url}>{el.login}</a>
                            </LI>
                        )
                    })}
                </Scroll>
            </UL>
            <Nav perPage={itemsCount} totalCount={data.items.length} paginator={paginator} />
        </UsersData>
    )
}
