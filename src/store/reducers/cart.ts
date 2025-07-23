import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../models/restaurante'

type CartState = {
  items: Restaurante[]
}
const initialState: CartState = {
  items: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Restaurante>) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<Restaurante>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      )
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
