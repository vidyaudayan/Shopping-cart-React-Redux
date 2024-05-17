import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity,decrementQuantity } from '../../features/cart/cartSlice'
import CartButton from '../cartButton/cartButton'


function Cart(props) {
  const itemsInCart = useSelector(state => state.cart.items)
  const totalItems = itemsInCart.reduce((count, item) => {
    return count = count + item.quantity
  }, 0)


    const productsInCart = useSelector(state => state.cart.items)
  return (
    <>
    <section className='py-16'>
  <div className="container mx-auto px-4">
<h2 className='text-xl font-bold'>Cart</h2>
<div className='mt-8 flex flex-col gap-4'>
{
    productsInCart.map(product =>{
        const dispatch= useDispatch()
        return(
            <article key={product._id} className='flex flex-row items-center  gap-3 border rounded-sm p-4 shadow-md'>
            <img className='w-36 h-36  object-center' src={product.image} alt="" />
          <div>
            <h3 className='font-bold'>{product.title}</h3>
           <span className='text-gray-600 text-sm'>${product.price}</span>
           <div className=' mt-4 flex flex-row items-center gap-1'>
            <button onClick={()=>dispatch(decrementQuantity(product._id))} className='w-6 h-6 bg-gray-300 flex flex-row items-center justify-center'>-</button>
            <span className='inline-block w-6 h-6 text-sm flex flex-row items-center justify-center'>{product.quantity}</span>
            <button onClick={()=>dispatch(incrementQuantity(product._id))} className='w-6 h-6 bg-gray-300 flex flex-row items-center justify-center'>+</button>
          </div>
          </div>
         
          </article>
        )
    })
}



</div>
  </div>

</section>
   <main>
       
   <div className='container mx-auto px-4 '>
     
     <div className='bg-slate-200' p-6>
       <h3 className='text-lg font-bold'>Purchased Items</h3>
     <table className=' w-full table-auto border-collapse border border-slate-400 '>
       <thead className='p-4'>
       <tr>
         <th className='border border-slate-700 ...'>Sl No.</th>
         <th className='border border-slate-700 ...'>Item</th>
         <th className='border border-slate-700 ...'>MRP</th>
         <th className='border border-slate-700 ...'>Quantity</th>
         <th className='border border-slate-700 ...'>Price</th>
       </tr>
       </thead>
      <tbody>
       {
         itemsInCart.map((item, index) => {
           return(

             <tr key= {item._id}>
             <td className=' text-center border border-slate-600 ...'>{index+1}</td>
             <td className=' text-center border border-slate-600 ...'>{item.title}</td>
             <td className='text-center border border-slate-600 ...'>{item.price}</td>
             <td className='text-center border border-slate-600 ...'>{item.quantity}</td>
             <td className='text-center border border-slate-600 ...'>{item.price * item.quantity}</td>
           </tr>
           )
         })
       }

    
      </tbody>
      
     </table>
    
     <CartButton/>
     </div>
   </div>



 </main>
 </>
  )
}

export default Cart