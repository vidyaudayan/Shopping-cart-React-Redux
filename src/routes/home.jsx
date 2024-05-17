import React, { useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import img1 from '../assets/pencil.webp' 
import img2 from '../assets/pullover.webp' 
import img3 from '../assets/block.webp' 
import img4 from '../assets/shirt.webp'
import img5 from '../assets/frock.webp' 
import img6 from '../assets/cardigan.webp'  
function home() {
    const [products, setProducts] = useState([
        {
          _id: 1,
          image: img1,
          category: 'Clothing',
          title: 'Pencil dress',
          price: 39.99,
        },
        {
          _id: 2,
          image: img2,
          category: 'Clothing',
          title: 'Knit pullover',
          price: 31.99,
        },
        {
          _id: 3,
          image: img3,
          category: 'Clothing',
          title: 'color block pullover',
          price: 24.99,
        },
        {
          _id: 4,
          image:img4 ,
          category: 'Clothing',
          title: 'Bold Red Shirt',
          price: 29.99,
        },
        {
            _id: 5,
            image: img5,
            category: 'Clothing',
            title: 'Striped shirt dress',
            price: 34.99,
          },
          {
            _id: 6,
            image: img6,
            category: 'Clothing',
            title: 'Shirt style cardigan',
            price: 29.99,
          }
      ])
  return (
    <div>
 <section className='py-16'>
          <div className='container mx-auto px-4 '>
            <h2 className='text-xl font-bold'>Popular Products</h2>
            <div className='grid grid-cols-3 gap-2 mt-8'>
              {
                products.map(product => {
                  return (
                    <ProductCard key={product._id} product={product} />
                  )
                })
              }

            </div>
          </div>

        </section>
    </div>
  )
}

export default home