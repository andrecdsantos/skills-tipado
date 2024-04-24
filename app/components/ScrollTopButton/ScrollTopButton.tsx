'use client'
import { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button
            className={`fixed bottom-4 right-4 text-xl md:text-3xl hover:text-tertiary ${isVisible ? 'block' : 'hidden'}`}
            onClick={handleClick}
        >
            <FaArrowAltCircleUp />
        </button>
    )
}

export default ScrollTopButton
