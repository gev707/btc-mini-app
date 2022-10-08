import React from 'react'
import { useRouter } from 'next/router'
import Logo from '../../assets/icons/logo'

const Header = () => {
    const router = useRouter();

    const goHomePage = () => {
        router.push('/')
    }

    return (
        <header className='header'>
            <div onClick={goHomePage} aria-hidden>
                <Logo />
            </div>
        </header>
    )
}

export default Header
