'use client'

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/reveal/reveal';
import { Lato, IM_Fell_English } from 'next/font/google';
import '../../../styles/home_sections/strategy/strategy_section_styles.css';
import wt_spotlight_1 from '../../../../public/spotlight_weapons_tactics_1.jpg'
import wt_spotlight_2 from '../../../../public/spotlight_weapons_tactics_2.jpg'
import wt_spotlight_3 from '../../../../public/spotlight_weapons_tactics_3.jpg'


const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })


const Strategy = () => {
    return (
        <>
            <div id = 'container-wt'>
                <Reveal duration = '1s' x ={0} y={20}>
                    <div id = 'heading-wt' style={{ fontFamily: english.style.fontFamily }}>
                        <span className = 'school-of'>
                            Weaponry and Tactics
                        </span>
                        <Reveal duration = '1s' x={0} y ={20}>
                            <div className = 'heading-blurb-wt'>
                                Where the forge of strategy blazes, and the crucible of combat tempers warriors into elite guardians, safeguarding our realms with unwavering resolve.
                            </div>
                        </Reveal>
                    </div>
                </Reveal>

                <div id = 'weaponry-content-thirds'>
                    <Reveal duration='1s' x={0} y={20}>
                        <div id = 'left-content-container'>
                            <Link href = '/learn/#strategy-course-1' className = 'wt-link-spotlight'>
                                <Image src = {wt_spotlight_1} alt = 'Link to `Advanced Swordsmanship and Battle Strategy` class. Image description: Two humanoid students, one tall and blue-skinned, the other shorter and the color of cocoa, both have their hand on the hilt of the same sword. They are facing each other, a determined look in their eyes, while standing on a long wooden desk in front of two observers. Behind them, the classroom is full of beings of different species and races sparring, similarly, with swords.' id = 'wt-spotlight-1'>
                                </Image>
                                <span className = 'caption-spotlight-wt' style={{ fontFamily: lato.style.fontFamily }}>
                                    <span className = 'wt-course-name'>
                                        Advanced Swordsmanship and Battle Strategy
                                    </span>
                                    <p className = 'wt-blurb'>
                                        Mastery of the blade is not enough.
                                    </p>
                                </span>
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal duration='1.5s' x={0} y={20}>
                        <div id = 'center-content-container'>
                          <Link href = '/learn/#strategy-course-3' className = 'wt-link-spotlight'>
                                <Image src = {wt_spotlight_2} alt = 'Link to `Harmony of Elements: Elemental Crafting` class. Image description: A large group of students in an outdoor class. There are blacksmithing activities, carving, and reading going on as the students sit at wooden worktables. One student, a bard, is playing the flute in the background' id = 'wt-spotlight-2'></Image>
                                <span className = 'caption-spotlight-wt' style={{ fontFamily: lato.style.fontFamily }}>
                                    <span className = 'wt-course-name'>
                                    Arcane Warfare: Enchanted Tactics
                                    </span>
                                    <p className = 'wt-blurb'>
                                        Explore the intricate dynamics of enchanted combat.
                                    </p> 
                                </span>
                          </Link>
                        </div>
                    </Reveal>

                    <Reveal duration = '2s' x={0} y={20}>
                        <div id = 'right-content-container'>
                           <Link href = '/learn/#strategy-course-4' className ='wt-link-spotlight'>
                                <Image src = {wt_spotlight_3} alt = 'Link to `Archery Precision and Tactical Deployment` class. Image description: An older photo of Garrick Ironfist surrounded by a couple of his dwarf students. They are under a large tree, working on their bows, arrows, and strategy.' id = 'wt-spotlight-3'></Image>
                                <span className = 'caption-spotlight-wt' style={{ fontFamily: lato.style.fontFamily }}>
                                <span className = 'wt-course-name'>
                                    Archery Precision and Tactical Deployment
                                    </span>
                                    <p className = 'wt-blurb'>
                                      The art of archery with a focus on unparalleled precision and tactical finesse.
                                    </p> 
                                </span>
                           </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </>
    )
}

export default Strategy;
