import { gsap } from 'gsap';
import { useEffect } from 'react';
import Image from 'next/image';
import AethLogo from '../../../public/Aetherium_logo_white.png';

const AnimatedLogo = () => {
    useEffect(() => {
        const onComplete = (element: HTMLElement | null) => {
            if (element instanceof HTMLElement) {
                element.style.display = 'block';
                element.addEventListener('click', () => {
                    window.location.href = '/';
                });
                element.classList.add('logo-after-animation');
            } else {
                console.error('Invalid element:', element);
            }
        };
    
        gsap.from('.logo', {
            duration: 0.5,
            onComplete: () => {
                gsap.to('.logo', {
                    duration: 2,
                    delay: 1,
                    width: '128px',
                    height: '128px',
                    //x: '50%',
                    //y: '10%',
                    onComplete: () => onComplete(document.querySelector('.logo'))
                });
            }
        });
    }, []);

    return (
        <div className = 'logo-animation-container'>
            <Image src={AethLogo} alt="Logo" className="logo" />
            <div className="content" style={{ display: 'none' }}>
            </div>
        </div>
    );
};

export default AnimatedLogo;
