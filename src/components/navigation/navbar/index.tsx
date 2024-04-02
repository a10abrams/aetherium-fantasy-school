import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../logo/logo';
import '../../../styles/navbar_styles.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ weight: '200', subsets: ['latin'] });

const Navbar = () => {
    return (
        <>
            <div className = 'navbar-container' style={{ fontFamily: raleway.style.fontFamily }}>
                <div id = 'left-container'>
                    <Link href='/about' className='nav-link'>
                        About
                    </Link>
                    <div className='nav-link dropdown' id='learn-dropdown'>
                        <Link className='button-drop nav-link' href = '/learn'>Learn</Link>
                        <div className='dropdown-content'>
                            <div className='dropdown-column'>
                                <span className = 'column-header'>
                                    Our Professors
                                </span>
                                <Link className='dropdown-prof-link' href= '/learn/#ignis-about-container'>
                                    Ignis Flameheart
                                </Link>
                                <Link className='dropdown-prof-link' href='/learn/#garrick-about-container'>
                                    Garrick Ironfist
                                </Link>
                                <Link className='dropdown-prof-link' href='/learn/#seraph-about-container'>
                                    Seraphina Lifescribe
                                </Link>
                                <Link className='dropdown-prof-link' href='/learn/#isolde-about-container'>
                                    Isolde Moonshaper
                                </Link>
                                <Link className='dropdown-prof-link' href='/learn/#magnus-about-container'>
                                    Magnus Stoneheart
                                </Link><Link className='dropdown-prof-link' href='/learn/#cael-about-container'>
                                    Caelum Skyseeker
                                </Link>
                            </div>
                            <div className= 'dropdown-column'>
                                <span className = 'column-header'>
                                    Courses
                                </span>
                                <Link className='dropdown-course-link' href='/learn/#arcane-course-4'>
                                    Ethereal Healing Techniques: Mending the Spirit
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#strategy-course-6'>
                                    Siege Warfare Techniques
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#astron-course-7'>
                                    Celestial Rituals for Guidance and Divination
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#strategy-course-9'>
                                    Unyielding Defense Techniques
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#arcane-course-3'>
                                    Enchanted Item Restoration
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#elem-course-7'>
                                    Harmony of Elements
                                </Link>
                                <Link className='dropdown-course-link' href='/learn/#section-title-courses'>
                                    More...
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href='/contact' className='nav-link'>
                        Contact
                    </Link>
                </div>
                <div id = 'center-logo'>
                    <Logo/> 
                </div>
                <div id = 'apply-container'>
                    <Link href='/apply' id='apply-btn'>
                        Apply
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
