import React from 'react'
import { useSelector } from 'react-redux'

function CartButton(props) {
const itemsInCart = useSelector(state=> state.cart.items)
const totalPrice= itemsInCart.reduce((total,item)=>{
return total+item.quantity*item.price
}, 0)
  return (
    <button className='px-4 py-2 text-white bg-violet-700 hover:bg-violet-900 w-full mt-5 rounded-sm '>Checkout ${totalPrice}</button>
  )
}

export default CartButton