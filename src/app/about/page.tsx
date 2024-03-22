'use client'

import Image from "next/image";
import "../../styles/about/about_styles.css";
import AboutSpotlight from "../../../public/corridor.png";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import { Lato, IM_Fell_English } from 'next/font/google';
import Footer from "@/components/navigation/footer";
import Reveal from "@/components/reveal/reveal";
import TopButton from "@/components/buttons/to_top";

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

export default function About () {
    return (
        <>
            <Navbar/>
            <TopButton/>
           <main>
                <div className = 'about-spotlight'>
                   <Image src = {AboutSpotlight} alt = 'A corridor at Aetherium' id = 'spotlight-corridor'></Image>
                   <Reveal duration= '0.3s' x={0} y={20}>
                        <div id = 'about-spotlight-caption' style={{ fontFamily: english.style.fontFamily }}>
                        About Us
                        </div>
                   </Reveal>

                </div>
                <div className ='about-container' style={{ fontFamily: lato.style.fontFamily }}>
                    <Reveal duration = '0.3s' x={0} y={20}>
                        <p>
                            WELCOME to Aetherium, where the mystical arts converge to create a legacy of defenders, enchanters, and sages. Founded by a group of extraordinary beings with a combined lifetime longer than the realms have witnessed, Aetherium stands as a testament to the harmony found in diversity and the strength that emerges from unity.
                        </p>
                        <br></br>
                        <p>
                            Our founders, Garrick Ironfist, Isolde Moonshaper, Magnus Stoneheart, Seraphina Lifescribe, Ignis Flameheart, and Caelum Skyseeker are not just instructors; they are friends who have weathered the ages together. Their dedication to the craft and the pursuit of knowledge has transformed Aetherium into a revered institution, sought after by those who aspire to master the magical arts.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#garrick-about-container' className = 'about-prof-inline'>
                                Garrick Ironfist
                            </Link>, the indomitable dwarf, imparts the art of weaponry and tactics forged in the crucible of battle. His storied past and strategic brilliance provide students with a foundation in combat that is both skillful and resilient.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#isolde-about-container' className ='about-prof-inline'>
                                Isolde Moonshaper
                            </Link>, the arcane dryad, weaves the delicate threads of enchantment and runecraft into the curriculum. Isolde's mastery in blending magic and craftsmanship results in the creation of powerful runes and artifacts, elevating the artistic and practical aspects of magic.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#magnus-about-container' className = 'about-prof-inline'>
                                Magnus Stoneheart
                            </Link>, the stoic giant, instills earth-based martial arts and defense techniques rooted in unyielding strength. His ancient form of combat, emphasizing resilience and rootedness, forms the cornerstone of physical mastery within Aetherium.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#seraph-about-container' className = 'about-prof-inline'>
                                Seraphina Lifescribe
                            </Link>, the wise sage, shares the ancient scripts of healing magic, nurturing a generation of healers and practitioners dedicated to rejuvenation and spiritual well-being. Seraphina's wisdom and compassion echo through the hallowed halls of our academy.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#ignis-about-container' className = 'about-prof-inline'>
                            Ignis Flameheart
                            </Link>, the elemental fire being, guides students through the controlled use of fire magic to prevent destruction. Banished from the elemental plane, Ignis imparts lessons in responsible manipulation of flames, ensuring the preservation of both knowledge and realms.
                        </p>
                        <br></br>
                        <p>
                            <Link href = '/learn/#cael-about-container' className = 'about-prof-inline'>
                                Caelum Skyseeker
                            </Link>, the mysterious seer, unfolds the secrets of fate through celestial navigation and astrology. Students embark on a cosmic journey, understanding the celestial forces that shape destinies and gaining insight into the mysteries of the cosmos.

                        </p>
                        <br></br>
                        <p>
                            At Aetherium, our slogan, "Harmony in Diversity, Strength in Aetherium," encapsulates our philosophy. We believe in fostering an environment where diverse magical disciplines coexist, creating a tapestry of knowledge and skills that collectively form a formidable strength.
                        </p>
                        <br></br>
                        <p>
                            Join us at Aetherium, where the ancient meets the contemporary, where lifelong friendships are forged, and where the pursuit of magical mastery is a journey, not a destination. Welcome to a legacy that transcends time, where harmony and strength converge in the tapestry that is Aetherium.
                        </p>
                    </Reveal>
                </div>
           </main>
           <Footer/>
        </>
    )
}
