import React from 'react'
import { LI, Pages } from './styles/users'
export function Nav({
    totalCount,
    perPage,
    paginator,
}: {
    totalCount: number
    perPage: number
    paginator: (number: number) => void
}): JSX.Element {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
        pageNumbers.push(i)
    }
    const goTo = (e: React.MouseEvent): void => {
        if (!(e.target instanceof HTMLElement) || !e.target.textContent) return
        const number = +e.target.textContent
        paginator(number)
    }
    return (
        <Pages>
            {pageNumbers.map((el: number) => (
                <LI onClick={goTo} key={el}>
                    {el}
                </LI>
            ))}
        </Pages>
    )
}
