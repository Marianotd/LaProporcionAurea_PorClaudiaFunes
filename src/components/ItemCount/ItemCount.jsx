import React, {useState} from 'react'

export default function ItemCount({initial, stock}) {
    const [cantCount, setCantCount] = useState(initial)

    function cantAdd() {
        if(cantCount < stock ) {
            setCantCount(cantCount + 2)
        }
    }

    function cantSustract() {
        if(cantCount > 2 ) {
            setCantCount(cantCount - 2)
        }
    }

    function onAdd(){
        if(stock > 0) {
            setCantCount(initial)
        }
    }

  return (
    <>
        <div className='itemCount col-4 d-flex flex-row align-items-center justify-content-around mb-2 my-2'>
            <button className='buttonCant col-3' onClick={cantSustract}>-</button>
            <span className='spanCant col-6 text-center'>{cantCount}</span>
            <button className='buttonCant col-3' onClick={cantAdd}>+</button>
        </div>
        <button className='buttonAdd py-1 mb-2 my-2' onClick={onAdd}>Añadir</button>
    </>
  )
}