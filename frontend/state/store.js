import { configureStore, createSlice } from '@reduxjs/toolkit'
import { pizzaApi } from './pizzaApi'

//const exampleReducer = (state = { count: 0 }) => {
  //return state
//}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    orders: [],
    filter: 'All'
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  }
})

export const {addOrder, setFilter} = pizzaSlice.actions

export const resetStore = () => configureStore({
  reducer: {
    example: exampleReducer,
    // add your reducer(s) here
    pizza: pizzaSlice.reducer,
    [pizzaApi.peducerPath]: pizzaApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    // if using Redux Thunk for your networking: you can ignore this
    pizzaApi.middleware
  ),
})

export const store = resetStore()
