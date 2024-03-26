'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import { Lato, IM_Fell_English } from 'next/font/google';
import Footer from "@/components/navigation/footer";
import Reveal from "@/components/reveal/reveal";
import TopButton from "@/components/buttons/to_top";
import '../../styles/apply/apply_styles.css';

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

export default function Apply () {
    return (
        <>
            <Navbar/>
            <TopButton/>
            <main>
                {/* <div className = 'apply-spotlight'>
                    <div>
                        Join Aetherium
                    </div>
                </div> */}
                <div className = 'apply-container'>
                    <Reveal duration = '1s' x = {0} y = {20}>
                        <div className = 'apply-types-blurb english-font'>
                            Choose that which most aligns with your experience:
                        </div>
                    </Reveal>
                    
                    <Reveal duration = '1s' x = {0} y = {20}>
                        <div className = 'apply-types-container'>
                            <Link href = '#'  id = 'dream-apply'>
                                <div className = 'apply-method english-font' id = 'dream-sense'>
                                    <div className = 'apply-title-method'>
                                        I had a prophetic dream.
                                    </div>
                                    <div className = 'learn-more-click'>
                                        arrow + learn more
                                    </div>
                                </div>
                            </Link>

                            <Link href = '#' id = 'beacon-apply'>
                                <div className = 'apply-method english-font' id = 'signal-sense'>
                                    <div className = 'apply-title-method'>
                                        I feel a signal.
                                    </div>
                                    <div className = 'learn-more-click'>
                                        arrow + learn more
                                    </div>
                                </div>
                            </Link>

                            <Link href = '#' id = 'summoning-apply'>
                                <div className = 'apply-method english-font' id = 'summon-sense'>
                                    <div className = 'apply-title-method'>
                                        I have been summoned.
                                    </div>
                                    <div className = 'learn-more-click'>
                                        arrow + learn more
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </main>
            <Footer/>
        </>
    )
}
