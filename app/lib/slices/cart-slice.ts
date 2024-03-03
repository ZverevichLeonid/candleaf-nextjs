import { createSlice } from "@reduxjs/toolkit"

export interface cartItem {
  id: string
  quantity: number
  price: number
  image: string
  name: string
}
export interface cart {
  cart: cartItem[]
}

const initialState: cart = {
  cart: [],
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cart.push({
        id: action.payload.id,
        quantity: 1,
        price: action.payload.price,
        image: action.payload.image,
        name: action.payload.name,
      })
    },
    deleteProduct(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    increaseQuantityProduct(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item) item.quantity = item.quantity + 1
    },
    decreaseQuantityProduct(state, action) {
      console.log(action)
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1
        } else if (item.quantity <= 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    deleteAllProducts(state) {
      state.cart = []
    },
  },
})
export const {
  addProduct,
  increaseQuantityProduct,
  decreaseQuantityProduct,
  deleteProduct,
  deleteAllProducts,
} = cartSlice.actions

export default cartSlice.reducer
