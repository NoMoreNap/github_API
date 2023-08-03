/* eslint-disable react/prop-types */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Page } from '../blocks/pagination'
import { githubApi, useGetUsersAscQuery } from '../reducers/api'
function withStoreProvider(store: any) {
    return function Wrapper({ children }: any) {
        return <Provider store={store}>{children}</Provider>
    }
}
const setupApiStore = (api?: any, extraReducers?: any, withoutListeners?: any) => {
    const getStore = () =>
        configureStore({
            reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
            middleware: gdm => gdm({ serializableCheck: false, immutableCheck: false }).concat(api.middleware),
        })

    const initialStore: any = getStore()
    const refObj = {
        api,
        store: initialStore,
        wrapper: withStoreProvider(initialStore),
    }

    let cleanupListeners: any

    beforeEach(() => {
        const store: any = getStore()
        refObj.store = store
        refObj.wrapper = withStoreProvider(store)

        if (!withoutListeners) {
            cleanupListeners = setupListeners(store.dispatch)
        }
    })

    afterEach(() => {
        cleanup()

        if (!withoutListeners) {
            cleanupListeners()
        }

        refObj.store.dispatch(api.util.resetApiState())
    })

    return refObj
}

const handle = [rest.get('https://api.github.com', (res: any, ctx: any) => res(ctx.json([{ isCompletd: true }])))]
const server = setupServer(...handle)
const store = setupApiStore(githubApi)

function TestComponent(): JSX.Element {
    const { data, isLoading } = useGetUsersAscQuery<any>('test')
    if (!data || isLoading) return <></>
    const { items } = data
    return (
        <div data-testid="test">
            {items.map((el: any) => {
                return <h1 key={el.id}>Test</h1>
            })}
        </div>
    )
}

describe('TodoList feature', () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('should show requested data', async () => {
        render(<TestComponent />, { wrapper: store.wrapper })
        expect(screen.findByText(/test/i))
    })
})