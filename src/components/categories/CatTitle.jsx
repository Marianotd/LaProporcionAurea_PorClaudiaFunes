import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CatTitle() {
    let { cat } = useParams()

    const [info, setInfo] = useState({ title: 'Novedades', description: '-' })

    useEffect(() => {
        const descriptions = {
            Ilustraciones: 'La ilustración es un dibujo, pintura u obra impresa de arte que explica, aclara, ilumina, visualmente representa, o simplemente decora un texto escrito, que puede ser de carácter literario o comercial.',
            Tarot: 'El tarot es una disciplina que permite analizar, reflexionar, recibir un consejo o bien obtener un pronóstico sobre el futuro. Funciona a través de la utilización de cartas: al interpretarlas en cierto orden, se obtendrá un método adivinatorio que permitirá obtener respuestas a ciertas preguntas del consultante.',
            Astrología: 'La astrología se encarga de estudiar la posición y comportamiento de los astros y, de esa forma, conforma una referencia entre sus conductas y los seres humanos. De acuerdo a sus fundamentos, cada movimiento planetario podrá afectar o influenciar a las personas, sus emociones, pensamientos y formas de ver la vida.',
            Cursos: 'Estos son mis cursos.',
            Tatuajes: 'Un tatuaje es un tipo de creación artística que sigue en el cuerpo de forma permanente. El diseño se hace perforando la piel con agujas e inyectando tinta especial para tatuajes en la capa más profunda de la piel.',
        }

        const newTitle = cat ? cat : 'Novedades'
        const newDescription = descriptions[cat] || '-'

        setInfo({ title: newTitle, description: newDescription })
    }, [cat])

    return (
        info.title === 'Novedades' ? (
            <h2 className='titleSection'>{info.title}</h2>

        ) : (
            <div className='py-4 px-2 text-center flex flex-col items-center gap-y-6'>
                <h2 className='titleSection'>{info.title}</h2>

                <p className='font-medium text-lg w-5/6' >
                    {info.description}
                </p>
            </div>
        )
    )
}
