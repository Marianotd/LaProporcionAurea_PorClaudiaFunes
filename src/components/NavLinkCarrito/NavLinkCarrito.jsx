import React from 'react'
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function NavLinkCarrito() {
  return (
    <Link to='/cart' className='col-6 col-md-12 text-center py-3 p-md-1'>
        <BiShoppingBag className='cartIcon'/>
    </Link>
  )
}