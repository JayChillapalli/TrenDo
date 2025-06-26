import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {

  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {

    const loadCart = async () => {
      const email = localStorage.getItem("email")
      try {

        const res = await axios.get("https://trendo-backend.onrender.com/api/cart",
          { params: { email } }
        )

        const data = res.data;

        if (data.success && data.cartItems) {
          console.log(data.cartItems);
          setCartItems(data.cartItems)

          const productPromiss = data.cartItems.map(item =>
            fetch(`https://dummyjson.com/products/${item.productId}`)
              .then(res => res.json())
          )

          const productData = await Promise.all(productPromiss)
          setProducts(productData)

        }
        else {
          console.log(data.message);

        }

      } catch (error) {
        console.log(error);

      }
    }

    loadCart()

  }, [])

  return (
    <div>
      <p>cart details</p>
      <div className='flex flex-col gap-2 p-4 lg:grid lg:grid'>
        {
          products.length === 0 ?
            (<p>no products available</p>)
            :
            (
              products.map((product, index) => (
                <Link className='flex w-full border gap-2 ' key={index}>
                  <div className='w-2/6'>
                    <img src={product.images?.[0]} alt="" />
                  </div>
                  <div className='felx w flex-col'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{cartItems[index]?.quantity}</p>
                  </div>
                </Link>
              ))
            )
        }
      </div>
    </div>
  )
}

export default CartPage