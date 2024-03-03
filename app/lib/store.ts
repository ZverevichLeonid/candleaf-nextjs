import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cart-slice"

import storage from "redux-persist/lib/storage"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import wishlistSlice from "./slices/wishlist-slice"
// defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
}
const rootReducer = combineReducers({
  cart: cartSlice,
  wishlist: wishlistSlice,
})
const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const makeStore = () => {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    })
    store.__persistor = persistStore(store)
    return store
  }
}

export type AppStore = ReturnType<typeof makeConfiguredStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
