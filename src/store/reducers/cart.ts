import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../models/restaurante'

// Novo tipo que inclui quantidade
export type CartItem = Cardapio & { quantidade: number }

type CartState = {
  items: CartItem[]
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
      const p = action.payload
      const existingItem = state.items.find(
        (item) => item.id === p.id && item.nome === p.nome
      )

      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...p, quantidade: 1 })
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    removeProduct: (
      state,
      action: PayloadAction<{ id: number; nome: string }>
    ) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.nome === action.payload.nome
      )

      if (index >= 0) {
        if (state.items[index].quantidade > 1) {
          state.items[index].quantidade -= 1
        } else {
          state.items.splice(index, 1)
        }
      }
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addProduct, open, close, removeProduct, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
