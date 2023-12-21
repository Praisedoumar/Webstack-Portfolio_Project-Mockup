import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const data = useLoaderData()
    const productData = data.data;
  return (
    <div>
      productData.map(item) =(
        div
        <div>
          <img className='w-52 h-64 object-contain' src="{item.image}" alt="productImg" />
        </div>
        
        
        

      )
    </div>
    
  )
}
 
export default Products