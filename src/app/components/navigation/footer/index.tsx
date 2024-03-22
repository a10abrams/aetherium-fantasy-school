import Link from 'next/link';
import Image from 'next/image';
import '../../../styles/footer_styles.css';
import SlogLogo from '../../../../public/Aetherium_logo_with_slog.png'
import { Raleway } from 'next/font/google';

const raleway = Raleway({ weight: '200', subsets: ['latin'] });

const Footer = () => {
    return (
        <>
            <div className = 'footer-container' style = {{fontFamily: raleway.style.fontFamily}}>
                <div className = 'footer-right-content'>
                    <div className = 'footer-link-container'>
                        <Link href = '/about' className ='footer-link'>
                            About
                        </Link>
                    </div>
                    <div className = 'footer-link-container'>
                        <Link href = '/learn/#professors-top-page' className = 'footer-link'>
                            Professor Profiles
                        </Link>
                    </div>
                    <div className = 'footer-link-container'>
                        <Link href = '/learn/#section-title-courses' className = 'footer-link'>
                            Courses
                        </Link>
                    </div>
                    <div className = 'footer-link-container'>
                        <Link href = '#' className = 'footer-link'>
                            Apply
                        </Link>
                    </div>
                </div>
                <div className = 'footer-logo-content'>
                    <Link href = '/' id = 'footer-logo-link'>
                        <Image src = {SlogLogo} alt = 'Aetherium logo with the school mission statement under it.' id = 'footer-logo-img'>
                        </Image>
                    </Link>
                </div>
                <div className = 'footer-left-content'>
                    <div className = 'footer-link-container-lef'>
                        <Link href = '#' className = 'footer-link'>
                            Non-discrimination Policy
                        </Link>
                    </div>
                    <div className = 'footer-link-container-lef'>
                        <Link href = '#' className = 'footer-link'>
                            Interdimensional Safety Agreement
                        </Link>
                    </div>
                </div>
                <div className = 'footer-socials-container'>
                    <div className = 'gh-link-container'>
                        <Link href = '#' id = 'gh-proj-link'>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
