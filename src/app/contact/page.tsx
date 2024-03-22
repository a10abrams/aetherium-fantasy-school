'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import { Lato, IM_Fell_English } from 'next/font/google';
import Footer from "@/components/navigation/footer";
import Reveal from "@/components/reveal/reveal";
import TopButton from "@/components/buttons/to_top";
import '../../styles/contact/contact_styles.css';

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

export default function Contact () {
    return (
        <>
            <Navbar/>
            <TopButton/>
            <main>
                <div className = 'contact-spotlight'>
                    <div id = 'ChangeThisToImgTagForPicture'>

                    </div>
                    <Reveal duration='1.2s' x={0} y={20}>
                        <div id = 'contact-spotlight-title'>
                                Contact Us
                        </div>
                    </Reveal>
                </div>

                <div className = 'contact-container'>

                </div>
            </main>
            <Footer/>
        </>
    )
}
