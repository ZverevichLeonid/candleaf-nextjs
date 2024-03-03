import { createSlice } from "@reduxjs/toolkit"

export interface wishlistItem {
  id: string
  price: number
  discountPrice: number
  image: string
  name: string
}
export interface wishlist {
  wishlist: wishlistItem[]
}

const initialState: wishlist = {
  wishlist: [],
}
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.wishlist.push({
        id: action.payload.id,
        image: action.payload.image,
        price: action.payload.price,
        name: action.payload.name,
        discountPrice: action.payload.discountPrice,
      })
    },
    deleteProduct(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      )
    },
  },
})
export const { addProduct, deleteProduct } = wishlistSlice.actions

export default wishlistSlice.reducer
