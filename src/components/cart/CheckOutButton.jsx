import React from 'react'

export default function CheckOutButton({ handleCheckOut }) {
  return (
    <button
      type='button'
      className='myButton'
      onClick={handleCheckOut}
      aria-label="Continuar con la compra"
    >
      Continuar compra
    </button>
  )
}
