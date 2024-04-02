'use client'

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../../../components/reveal/reveal';
import { Lato, IM_Fell_English } from 'next/font/google';
import cel_spotlight_1 from '../../../../public/spotlight_celestial_1.png';
import cel_spotlight_2 from '../../../../public/spotlight_celestial_2.png';
import cel_spotlight_3 from '../../../../public/spotlight_celestial_3.png';
import cel_spotlight_4 from '../../../../public/spotlight_celestial_4.png';
import cel_spotlight_5 from '../../../../public/spotlight_celestial_5.png';
import cel_spotlight_6 from '../../../../public/spotlight_celestial_6.png';
import cel_spotlight_7 from '../../../../public/spotlight_celestial_7.png';
import cel_spotlight_8 from '../../../../public/spotlight_celestial_8.png';
import '../../../styles/home_sections/celestial/celestial_section_styles.css';

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

const Celestial = () => {
    return (
        <>
            <div id = 'container-cel'>
                <div id='grid-item-1'>
                    <Reveal duration='1s' x={0} y={0}>
                        <Image src = {cel_spotlight_1} alt ='A spell; a white and yellow circle of light and its rays' id = 'grid-img-1'>
                        </Image>
                    </Reveal>
                </div>

                <div id='grid-item-2'>
                    <Reveal duration='1s' x={0} y={0}>
                        <Image src = {cel_spotlight_3} alt ='A nodule of an element found around Aetherium campus, aptly named Aetheraspalt. It is round bumpy-looking, and iridescent.' id = 'grid-img-2'>
                        </Image>
                    </Reveal>
                </div>

                <div id='grid-item-3'>
                    <Reveal duration='1s' x={0} y={0}>
                        <Image src = {cel_spotlight_6} alt ='A quill, a scroll, and a stack of books.' id = 'grid-img-3'></Image>
                    </Reveal>
                </div>

                <div id='grid-item-4'>
                    <Reveal duration='1.5s' x={0} y={0}>
                        <Image src = {cel_spotlight_5} alt ='A wooden slab with different colored stones inset. The wood is dark and smooth on top, as if a human made it, and rough around the edges. The stones are of different shapes and colors, and have runes carved into them.' id = 'grid-img-4'></Image>
                    </Reveal>
                </div>

                <div id='grid-item-5'>
                    <Reveal duration='1.5s' x={0} y={20}>
                        <div id = 'heading-cel' style={{ fontFamily: english.style.fontFamily }}>
                            <span className = 'school-of'>
                                <Link href = '/learn/#astron-school-holder' id = 'cel-school-hover'>
                                    Astrological Studies & Navigation
                                </Link>
                            </span>
                            <Reveal duration = '2s' x={0} y={10}>
                                <span className = 'heading-blurb-cel'>
                                    Where cosmic mysteries unfurl, and the constellations guide a celestial journey into boundless exploration.
                                </span>
                            </Reveal>
                            <Reveal duration = '2.3s' x={0} y={-50}>
                                <Link href = '/learn/#astron-school-holder' id = 'link-inline-courses'>
                                    <div>
                                        Learn more
                                    </div>
                                </Link>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>

                <div id='grid-item-6'>
                    <Reveal duration='1.5s' x={0} y={0}>
                        <Image src = {cel_spotlight_4} alt ='A gold sextant.' id = 'grid-img-6'></Image>
                    </Reveal>
                </div>

                <div id='grid-item-7'>
                    <Reveal duration='1.7s' x={0} y={0}>
                        <Image src = {cel_spotlight_2} alt ='A black, iridium-like element, common all over the planet, called froenyx.' id = 'grid-img-7'></Image>
                    </Reveal>
                </div>

                <div id='grid-item-8'>
                    <Reveal duration='1.7s' x={0} y={0}>
                        <Image src = {cel_spotlight_8} alt = 'Our moon, K-A5.' id = 'grid-img-8'></Image>
                    </Reveal>
                </div>

                <div id='grid-item-9'>
                    <Reveal duration='1.7s' x={0} y={0}>
                        <Image src = {cel_spotlight_7} alt = 'A small stone statue of an ancient, worshipped deity. Nobody knows its actual name.' id = 'grid-img-9'></Image>
                    </Reveal>
                </div>
            </div>
        </>
    )
}

export default Celestial
