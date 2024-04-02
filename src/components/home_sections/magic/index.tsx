'use client'

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../../../components/reveal/reveal';
import { Lato, IM_Fell_English } from 'next/font/google';
import spotlight_1 from '../../../../public/spotlight_magic_1.jpg'
import spotlight_2 from '../../../../public/spotlight_magic_2.png'
import spotlight_3 from '../../../../public/spotlight_magic_3.jpg'
import '../../../styles/home_sections/magic/magic_section_styles.css';

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

const Magic = () => {
    return (
        <>
            <div className = 'container'>
                <Reveal duration='1s' x={0} y={20}>
                    <div id = 'heading' style={{ fontFamily: english.style.fontFamily }}>
                        <span className = 'school-of'>
                            Mystical Arts & Magic
                        </span>
                        <span className = 'heading-blurb'>
                            Where arcane wonders unfold, and the tapestry of magic weaves a spellbinding journey into the realms of possibility.
                        </span>
                    </div>
                </Reveal>

                <Reveal duration='1s' x={0} y={30} >
                    <div className = 'left-align-content-magic'>
                        <div className = 'container-img'>
                            <Link href = "learn/#arcane-course-6" className = 'link-spotlight-img'>
                                <Image src = {spotlight_1} alt = 'A group of students of varying ages and species sitting in their outdoor class in the woods.' id = 'magic-spotlight-1'>
                                </Image>
                                <span className = 'caption-spotlight-img' style={{ fontFamily: lato.style.fontFamily }}>
                                    Aetherium students enjoying a class retreat.
                                </span>
                            </Link>
                        </div>
                        <div className = 'container-content' style={{ fontFamily: lato.style.fontFamily }}>
                            <Link href = 'learn/#arcane-course-6' className = 'magic-course-name'>
                                Nature's Embrace: Healing in the Wilderness
                            </Link>
                            <p className = 'magic-course-desc'>
                                In the heart of the mystical wilderness, where the serene dance of healing magic and the grounded strength of earth-based martial arts converge, be guided by Seraphina Lifescribe and Magnus Ironfist in a transformative semester where ageless wisdom meets holistic well-being.
                            </p>
                            <div className = 'container-course-link'>
                                <Link href = 'learn/#arcane-course-6' className = 'embed-course-link'>
                                    <span className = 'learn-more'>
                                        Learn more about this course
                                    </span>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </Reveal>

                <Reveal duration = '1s' x={0} y={50}>
                    <div className = 'right-align-content-magic'>
                        <div id = 'container-content-right' style={{ fontFamily: lato.style.fontFamily }}>
                            <Link href = 'learn/#arcane-course-7' className = 'magic-course-name'>
                                Pyro-Healing Nexus: Restorative Flames
                            </Link>
                            <p className = 'magic-course-desc'>
                                Ignite the flames of profound healing! Over a comprehensive semester, unravel the secrets of transformative fire magic, blending ancient wisdom, intricate incantations, and the innate synergy between white magic and pyromancy.
                            </p>
                            <div className = 'container-course-link'>
                                <Link href = 'learn/#arcane-course-7' className = 'embed-course-link'>
                                    <span className = 'learn-more'>
                                        Learn more about this course
                                    </span>
                                </Link>
                            </div> 
                        </div>
                        <div id = 'container-img-right'>
                            <Link href = 'learn/#arcane-course-7' className = 'link-spotlight-img'>
                                <Image src = {spotlight_2} alt = "A headshot of a black drwarf student holding a glowing orb of power, smiling down on it. The orb is lighting her face from below, highlighting her determined smile." id = 'magic-spotlight-2'>
                                </Image>
                                <span className = 'caption-spotlight-img' style={{ fontFamily: lato.style.fontFamily }}>A third-year mage casting <i>ardor vitae</i>.
                                </span>
                            </Link>
                        </div>
                    </div>
                </Reveal>

                <Reveal duration = '1s' x={0} y={70}>
                    <div className = 'left-align-content-magic'>
                        <div className = 'container-img'>
                            <Link href = 'learn/#arcane-course-8' className = 'link-spotlight-img'>
                                <Image src = {spotlight_3} alt = 'A group of students standing around a large, long table studying healing magic. They are all wearing white cloaks.' id = 'magic-spotlight-3'>
                                </Image>
                                <span className = 'caption-spotlight-img' style={{ fontFamily: lato.style.fontFamily }}>White-cloack-donned "Purification and Restoration" students creating potions for the first time.
                                </span>
                            </Link>
                        </div>
                        <div className = 'container-content' style={{ fontFamily: lato.style.fontFamily }}>
                            <Link href = 'learn/#arcane-course-8' className = 'magic-course-name'>
                                Sacred White Magic: Purification and Restoration
                            </Link>
                            <p className = 'magic-course-desc'>
                                Begin your mystical arts journey by discovering ancient wisdom, purification rituals, restorative incantations, and sacred herbology, meticulously curated and led by the venerable Seraphina Lifescribe.
                            </p>
                            <div className = 'container-course-link'>
                                <Link href = 'learn/#arcane-course-8' className = 'embed-course-link'>
                                    <span className = 'learn-more'>
                                        Learn more about this course
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </>
    )
}

export default Magic;
