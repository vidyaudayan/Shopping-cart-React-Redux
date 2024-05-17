import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

function ProductCard(props) {
    const dispatch= useDispatch()
    const {title,image,price}= props.product
  return (
    <article className='border p-3  rounded-md'>
    <img className='w-full' src={image} alt="" />
    <span>Clothing</span>
    <h3 className='font-bold'>{title}</h3>
    <div className='flex flex-row text-orange-400'>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9734;</span>
    </div>
    <div className='flex flex-row items-center justify-between'>
      <span>${price}</span>
      <button onClick={()=>dispatch(addToCart(props.product))} className='text-xs bg-green-600 text-white px-2 p-1 rounded-md'>+Add</button>
    </div>
  </article>
  )
}

export default ProductCard