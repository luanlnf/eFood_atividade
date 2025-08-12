import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante, Cardapio } from '../../models/restaurante'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    // remove pelo índice
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    }
  }
})

export const { addProduct, open, close, removeProduct } = cartSlice.actions
export default cartSlice.reducer
