import React from 'react'
import NavLink from '../NavBar/NavLink'
import Logo from '../Logo/Logo'


export default function Footer() {
  return (
        <footer> 
        <div className="divFooter d-flex flex-row flex-wrap align-items-center justify-content-around justify-content-xl-evenly text-center p-4 gap-2">
            <div className='col-12 mb-4'>
                <Logo/>
            </div>
            

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Redes sociales</h5>
                <NavLink name="Instagram" link="https://www.instagram.com/"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Facebook"  link="https://es-la.facebook.com/"       classImg="d-none" targetLink="_blank"/>
                <NavLink name="Twitter"   link="https://twitter.com/?lang=es"      classImg="d-none" targetLink="_blank"/>
                <NavLink name="Pinterest" link="https://ar.pinterest.com/"         classImg="d-none" targetLink="_blank"/>
                <NavLink name="Whatsapp"  link="https://www.whatsapp.com/?lang=es" classImg="d-none" targetLink="_blank"/>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Categorias</h5>
                <NavLink name="Ilustraciones" link="ilustraciones.html" classImg="d-none" targetLink="_blank"/>
                <NavLink name="Tarot"         link="tarot.html"         classImg="d-none" targetLink="_blank"/>
                <NavLink name="Astrología"    link="astrologia.html"    classImg="d-none" targetLink="_blank"/>
                <NavLink name="Cursos"        link="cursos.html"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Tatuajes"      link="tatuajes.html"      classImg="d-none" targetLink="_blank"/>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Mi usuario</h5>
                <NavLink name="Mi cuenta"     link="" classImg="d-none" targetLink=""/>
                <NavLink name="Mis pedidos"   link="" classImg="d-none" targetLink=""/>
                <NavLink name="Mis cursos"    link="" classImg="d-none" targetLink=""/>
                <NavLink name="Contacto"      link="" classImg="d-none" targetLink=""/>
                <NavLink name="Cerrar sesión" link="" classImg="d-none" targetLink=""/>
            </div>
        </div>
    </footer>
  )
}