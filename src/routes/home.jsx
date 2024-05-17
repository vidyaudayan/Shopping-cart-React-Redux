import React, { useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

function home() {
    const [products, setProducts] = useState([
        {
          _id: 1,
          image: '/products/pencil.webp',
          category: 'Clothing',
          title: 'Pencil dress',
          price: 39.99,
        },
        {
          _id: 2,
          image: '/products/pullover.webp',
          category: 'Clothing',
          title: 'Knit pullover',
          price: 31.99,
        },
        {
          _id: 3,
          image: '/products/block.webp',
          category: 'Clothing',
          title: 'color block pullover',
          price: 24.99,
        },
        {
          _id: 4,
          image: '/products/shirt.webp',
          category: 'Clothing',
          title: 'Bold Red Shirt',
          price: 29.99,
        },
        {
            _id: 5,
            image: '/products/frock.webp',
            category: 'Clothing',
            title: 'Striped shirt dress',
            price: 34.99,
          },
          {
            _id: 6,
            image: '/products/cardigan.webp',
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