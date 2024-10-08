import { Outlet } from 'react-router-dom'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import UpButton from '../components/common/UpButton'
import { useRef } from 'react'

export default function AppLayout() {
    const topRef = useRef(null)

    const handleRef = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            ref={topRef}
            className='relative min-vh-100 w-full text-textMain font-customFont'
        >
            <div className='bg-main'>
                <NavBar />
            </div>

            <div className='container flex flex-col min-h-screen max-w-[1220px] mx-auto gap-y-4 mb-4'>
                <Outlet />
            </div>

            <div className='bg-main'>
                <Footer />
            </div>

            <UpButton buttonFunction={handleRef} />
        </div>
    )
}