import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonAdd({ category }) {
  return (
    <>
        <Link className='itemButton itemButton--large py-1 my-2' to={`/${category}`}>Ver más productos</Link>
        <Link className='itemButton itemButton--large py-1 my-2' to={`/cart`}>Ir al carrito</Link>
    </>

  )
}
