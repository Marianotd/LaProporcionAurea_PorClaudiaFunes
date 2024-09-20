import React from 'react'
import Portada from '../components/home/Portada'
import ItemListContainer from '../components/categories/ItemListContainer'
import CatTitle from '../components/categories/CatTitle'

export default function Home() {
    return (
        <>
            <Portada />

            <CatTitle />

            <ItemListContainer />
        </>
    )
}