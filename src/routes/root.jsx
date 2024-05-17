import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Root() {
    const itemsInCart = useSelector(state => state.cart.items)
    const totalItems = itemsInCart.reduce((count, item) => {
      return count = count + item.quantity
    }, 0)
  
  return (
    <div>
           <header className='h-20 py-4 bg-violet-950'>
        <div className='container mx-auto px-4 h-full flex flex-row items-center justify-between'>
          <div className='h-full flex flex-row items-center text-lg gap-4'>
            <img className='w-12' src="/logos/greenbag.png" alt="" />
            <span className='text-white'>BuyKart</span>
          </div>
          <Link to='/cart'>
            <div className='relative'>
              <span class="material-symbols-outlined text-slate-400">local_mall</span>
              <span className=' absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 rounded-full w-4 h-4 bg-pink-200 text-xs flex flex-row items-center justify-center'>{totalItems}</span>
            </div>

          </Link>

        </div>

      </header>
      <Outlet/>
    </div>
  )
}

export default Root