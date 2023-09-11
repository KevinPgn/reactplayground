import React from 'react';
import "./shop.css"
import { useState, useEffect } from 'react'
import Chaussure1 from '../../assets/chaussuresShop/chaussure1.avif'
import Cart from '../../assets/chaussuresShop/cart.png'


export default function cartShop() {
  
  const [active, setActive] = useState("")
  const [number, setNumber] = useState(1)
  const [price, setPrice] = useState(150)
  const [img, setImg] = useState(Chaussure1)

  const [cart, setCart] = useState([])

  const increment = () => {
    setNumber(c => c + 1)
  }

  const decrement = () => {
    setNumber(c => c - 1)

    if (number <= 1) {
      setNumber(1)
    }
  }

  useEffect(() => {
    setPrice(150 * number)
  }, [number])

  const addToCart = () => {
    const newCart = {id: new Date().getTime(), number: number, price: price}
    
    setCart([...cart, newCart])
  }

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  console.log('test')

  return (
    <>
      <section className="hero">

        <div className="content-cart">
          <img src={Cart} alt="" className='cart' onClick={() => setActive(!active)}/>
          <div className="command-cart"></div>
          {active ? <div className="cart-active">
            {cart.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="left">
                    <img src={Chaussure1} alt="" />
                  </div>
                  <div className="right">
                    <p className='cart-item-number'>Nombre de commande : {item.number}</p>
                    <button className="delete" onClick={() => handleDelete(item.id)}>X</button>
                    <p className='cart-item-price'>{item.price}$</p>
                  </div>
                </div>                
              )
            })}
            <h1 className='result'>{cart.reduce((total, item) => total + item.price, 0)}$</h1>
          </div> : null}
        </div>

        <div className="container-hero">

          <div className="left">
            <img src={Chaussure1} alt="" />
          </div>

          <div className="right">
            <h1>Chaussure Nike Blanche</h1>
            <p className='title'>Une paire de chaussures qui pourrait vous rendre heureux</p>

            <div className="price">
              <h2>{price}$</h2>
              <p className='promo'>50%</p>
            </div>

            <div className="cart-add">

              <div className="add">

                <button className="plus" onClick={increment}>+</button>
                <p className="number">{number}</p>
                <button className="minus" onClick={decrement}>-</button>
              </div>

              <div className="add-to-cart">
                <button className='add-to-cart-btn' onClick={addToCart}>Add to cart</button>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}
