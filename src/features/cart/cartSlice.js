import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[]
  },
  reducers: {
  
addToCart: (state, action) => {
  const cartItem= {
    ...action.payload,
    quantity:1
  }
state.items.push(cartItem)
    },
  incrementQuantity: (state,action) => {
    state.items = state.items.map(item =>{
      if(item._id === action.payload){
        return{
          ...item,
         quantity:item.quantity + 1
      }
      }
      return item
    })
  },
  decrementQuantity: (state,action) => {
    state.items = state.items.map(item =>{
      if(item._id === action.payload){
        return{
          ...item,
         quantity:item.quantity - 1
      }
      }
      return item
  
  
      })

      state.items = state.items.filter(item => {
        if(item.quantity> 0){
              return item
        }
      })
  }
}
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementQuantity, decrementQuantity} = cartSlice.actions

export default cartSlice.reducer