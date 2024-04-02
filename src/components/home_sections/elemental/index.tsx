'use client'

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../../../components/reveal/reveal';
import { Lato, IM_Fell_English } from 'next/font/google';
import elem_spotlight_1 from '../../../../public/spotlight_elements_1.png';
import elem_spotlight_2 from '../../../../public/spotlight_elements_2.png';
import elem_spotlight_3 from '../../../../public/spotlight_elements_3.png';
import '../../../styles/home_sections/elemental/elemental_section_styles.css'

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

const Elemental = () => {
    return (
        <>
            <div className = 'container-elem'>
                <Reveal duration='1s' x={0} y={20}>
                    <div id = 'heading-elem' style={{ fontFamily: english.style.fontFamily }}>
                        <span className = 'school-of-elem'>
                            Elemental Arcana
                        </span>
                        <span className = 'heading-blurb-elem'>
                            Immerse yourself in the wondrous tapestry of elemental magic, where the whispers of the wind, the roar of the flames, and the crash of the waves converge to shape spells with unparalleled artistry and power.
                        </span>
                    </div>
                </Reveal>

                <Reveal duration='1s' x={0} y={20}>
                    <div id = 'element-spread-grid-container'>
                        <div id = 'large-content-elem'>
                            <Link href = '/learn/#elem-course-1' className = 'elem-course-link'>
                                <Image src = {elem_spotlight_2} alt = 'A group of Aetherium students observing a controlled town razing. Even thought they are indoors and the fire is large, there is no smoke. The students are calmly observing.' id = 'elem-spotlight-1'>
                                </Image>
                                <span className = 'elem-course-caption' style={{ fontFamily: lato.style.fontFamily }}>
                                    <span className = 'elem-course-name'>
                                        Controlled Pyrokinetics: Mastery Over Flames
                                    </span>
                                    <span className = 'elem-course-desc'>
                                        From the flicker of a candle flame to the raging infernos of the arcane, unlock the secrets of harnessing and controlling the primal forces of fire.
                                    </span>
                                </span>
                            </Link>
                        </div>
                        
                        <div id = 'med-content-duo-elem'>
                            <div id = 'elem-top-duo-content'>
                                <Link href = '/learn/#elem-course-8' className = 'med-duo-course-link'>
                                    <Image src = {elem_spotlight_3} alt = 'Students at sea. On the deck of a boat at night, students are sitting around a tiny, contained fire.' id = 'elem-spotlight-2'>
                                    </Image>
                                    <span className = 'elem-course-caption-med' style={{ fontFamily: lato.style.fontFamily }}>
                                        <span className = 'elem-course-name'>
                                            Inferno Tides
                                        </span>
                                        <span className = 'elem-course-desc'>
                                            How can water enhance and amplify the potency of fiery incantations?
                                        </span>
                                    </span>
                                </Link>
                            </div>
                            <div id = 'elem-bottom-duo-content'>
                                <Link href = '/learn/#elem-course-6' className = 'med-duo-course-link'>
                                    <Image src = {elem_spotlight_1} alt = 'A group of students sit comfortably in the forest. They are wearing comfortable, flowing clothes, and are talking and laughing amongst themselves.' id = 'elem-spotlight-3'>
                                    </Image>
                                    <span className = 'elem-course-caption-med' style={{ fontFamily: lato.style.fontFamily }}>
                                        <span className = 'elem-course-name'>
                                            Flames of Renewal: Elemental Regeneration
                                        </span>
                                        <span className = 'elem-course-desc'>
                                            Discover the profound connection between fire's destructive force and earth's regenerative power.
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div id = 'course-link-list' style={{ fontFamily: lato.style.fontFamily }}>
                            <div className = 'elem-course-link-container'>
                                <Link href = '/learn/#elem-course-5' className = 'list-elem-course-link'>
                                    <span className = 'course-name-underline'>
                                        FLAMEFORGING
                                    </span>
                                <span className = 'list-elem-course-blurb'>
                                    Crafing weapons infused with fire
                                </span>
                                </Link>
                            </div>

                            <div className = 'elem-course-link-container'>
                                <Link href = '/learn/#elem-course-4' className = 'list-elem-course-link'>
                                    <span className = 'course-name-underline'>
                                        ELEMENTAL MANIPULATION
                                    </span>
                                    <span className = 'list-elem-course-blurb'>
                                        Harnessing the power of fire
                                    </span>
                                </Link>
                            </div>

                            <div className = 'elem-course-link-container'>
                                <Link href = '/learn/#elem-course-9' className = 'list-elem-course-link'>
                                    <span className = 'course-name-underline'>
                                        PYRODEFENSIVE STRATEGIES
                                    </span>
                                    <span className = 'list-elem-course-blurb'>
                                        Using fire for protection
                                    </span>
                                </Link>
                            </div>

                            <div className = 'elem-course-link-container'>
                                <Link href = '/learn/#elem-course-7' className = 'list-elem-course-link'>
                                    <span className = 'course-name-underline'>
                                      HARMONY OF ELEMENTS
                                    </span>
                                    <span className = 'list-elem-course-blurb'>
                                        Elemental crafting with Isolde Moonshaper
                                    </span>
                                </Link>
                            </div>

                            <div className = 'elem-course-link-container'>
                                <Link href = '/learn/#elem-course-2' className = 'list-elem-course-link'>
                                    <span className = 'course-name-underline'>
                                        ELEMENTAL INVOCATION
                                    </span>
                                    <span className = 'list-elem-course-blurb'>
                                        Summoning the elemental guardians
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

export default Elemental;
