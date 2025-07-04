import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
// import { pokemonApi } from './services/pokemon'
import DummySlice from "./redux/DummySlice"
export const store = configureStore({
  reducer: {
    slice:DummySlice
    // Add the generated reducer as a specific top-level slice
    // add slices here
    // ["tes"]: "",// add the api rtk here
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)