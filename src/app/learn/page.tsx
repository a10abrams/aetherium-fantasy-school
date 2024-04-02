'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import "../../styles/about/about_styles.css";
import Link from "next/link";
import Navbar from "../../components/navigation/navbar";
import { Lato, IM_Fell_English } from 'next/font/google';
import Footer from "../../components/navigation/footer";
import '../../styles/learn/learn_section_styles.css'
import IgnisHeadshot from '../../../public/spotlight_ignis_flameheart.png';
import GarrickHeadshot from '../../../public/spotlight_garrick_ironfist.png';
import SeraphHeadshot from '../../../public/spotlight_seraphina_lifescribe.png';
import IsoldeHeadshot from '../../../public/spotlight_isolde_moonshaper.png';
import MagnusHeadshot from '../../../public/spotlight_magnus_stoneheart.png';
import CaelHeadshot from '../../../public/spotlight_caelum_skyseer.png';
import TopButton from '../../components/buttons/to_top/index';

const english = IM_Fell_English({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: '300', subsets: ['latin'] })

const Learn = () => {
    return (
        <>
            <Navbar/>
            <main>
                <TopButton/>
                <div id = 'learn-spotlight-container'>

                </div>
                <div className = 'section-title-learn english-font' id = 'professors-top-page'>
                    Our Professors
                </div>
                <div className = 'section-desc-learn'>
                    <p>
                        Welcome to the esteemed faculty of Aetherium, where knowledge and mastery converge under the guidance of our renowned professors. Get to know the brilliant minds behind our diverse disciplines as we introduce you to the exceptional individuals who shape the future of magical education. Explore their captivating backgrounds, unparalleled expertise, and unwavering dedication to nurturing the talents of our students. Join us as we illuminate the boundless potential and extraordinary achievements of the esteemed professors of Aetherium, each contributing their unique brilliance to our vibrant academic community.
                    </p>
                </div>
                <div id = 'ignis-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container'>
                            <Image src = {IgnisHeadshot} alt = 'A photo of Ignis Flameaheart. He is a distinctly humanoid flame elemental. Featuring flaming hair, hands, and  feet contrasting against his youthful, ash-colored face. Under his chin is the tall, ornate collar of a trenchcoat' className = 'prof-headshot' id = 'ignis-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Ignis Flameheart
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Meet Professor Ignis, an esteemed member of the Aetherium faculty, revered for his expertise in pyromancy and elemental control. With a fervent dedication to preventing destruction, Ignis specializes in teaching the responsible manipulation of flames, instilling in his students a profound respect for the power of fire magic.
                            </p>
                            <br></br>
                            <p>
                                Despite his elemental origins, Ignis possesses a strikingly humanoid appearance. Constantly enveloped in flames, he exudes an aura of controlled intensity, yet possesses the unique ability to temper the fire around him, shaping it into a dry, rocky form at will. His fiery hair and hands, feet, and face, capable of generating flames and heat even amidst his rocky exterior, serve as a testament to his elemental essence.
                            </p>
                            <br></br>
                            <p>
                                A connoisseur of elegance and refinement, Ignis adorns himself in impeccably tailored attire, a nod to his desire to make up for lost experiences in his formative years. While he may occasionally overlook the practicality of suspenders and dress shoes in combat, Ignis is a versatile instructor, able to impart his knowledge and expertise in any outfit.
                            </p>
                            <br></br>
                            <p>
                                Despite his youthful appearance, Ignis boasts a wealth of experience accumulated over his 640-plus years of existence. Revered by his students for his youthful vigor and dapper appearance, Ignis embodies the spirit of innovation and enlightenment. An anarchist at heart, he challenges conventional thinking and seeks to share the transformative power of fire with all who seek knowledge.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div id = 'garrick-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container gradient-background'>
                            <Image src = {GarrickHeadshot} alt = 'A photo of Garrick Ironfist. He is an older dwarf with battle scars and piercings. He wears reading glasses, a tiny braid in his beard, and light armor.' className = 'prof-headshot' id = 'garrick-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Garrick Ironfist
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Introducing Professor Garrick Ironfist, a stalwart figure in the hallowed halls of Aetherium, renowned for his mastery of weaponry and tactics honed through years of battle-hardened experience. With an unwavering dedication to his craft, Garrick imparts the time-honored wisdom of combat strategy and the art of forging powerful weapons to eager students seeking to follow in his formidable footsteps.
                            </p>
                            <br></br>
                            <p>
                                As an elder among dwarves, Garrick's weathered visage bears the scars of countless conflicts, yet his youthful spirit and keen intellect shine brightly from behind his spectacles. His thick, brown and grey hair cascades in a proud mane, framing his face and beard with an aura of wisdom and resilience. Standing at a stout 4'3", his robust frame and ever-present boots reflect a readiness for action, whether it be on the battlefield or at the forge.
                            </p>
                            <br></br>
                            <p>
                                A revered veteran of numerous wars, Garrick's strategic brilliance and unwavering courage have earned him a reputation as the epitome of dwarven resilience and strength. With a lifetime of experiences yet to be shared, Professor Ironfist embodies the essence of intelligence, fortitude, and bravery, inspiring students to embrace the challenges of combat with skill and determination.
                            </p>
                        </div>
                    </div>
                </div>
                <div id = 'seraph-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container gradient-background'>
                            <Image src = {SeraphHeadshot} alt = 'A photo of Seraphina Lifescribe. She is a wise and elderly sage, and you can see it through her wrinkles. She long black hair, tanned skin, and striking blue eyes. ' className = 'prof-headshot' id = 'seraph-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Seraphina Lifescribe
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Meet Professor Seraphina Lifescribe, a venerable sage whose ageless wisdom and boundless compassion transcend the boundaries of time. As a devoted scholar of healing and white magic, Seraphina is dedicated to unraveling the mysteries of rejuvenation and spiritual well-being, guiding her students on a transformative journey of self-discovery and healing.
                            </p>
                            <br></br>
                            <p>
                                Despite her visage, which seems to defy conventional notions of age, Seraphina radiates a timeless aura of wisdom and serenity. Her long, jet-black hair cascades around her wrinkled, yet expressive face, a testament to her enduring vitality and unwavering spirit. Clad in attire that belies her age, save for her signature staff, Seraphina carries with her a symbol of celestial craftsmanship, a gift from her dear friend, Caelum Skyseeker. Adorned with a crescent moon and sun motif, the staff serves as both a tool of her trade and a testament to her enduring bond with the celestial scholar.
                            </p>
                            <br></br>
                            <p>
                                As a two-spirit individual, Seraphina embodies a cheeky and quick-witted demeanor, tempered by a fierce sense of caring and empathy. Her kind and expressive eyes mirror the depth of her soul, inviting students to embrace the transformative power of healing magic and cultivate a sense of compassion for themselves and others.
                            </p>
                            <br></br>
                            <p>
                                Through her teachings, Professor Lifescribe instills in her students a profound understanding of the interconnectedness of mind, body, and spirit, empowering them to embark on a journey of self-discovery and holistic well-being. With Seraphina as their guide, students learn to harness the transformative power of healing magic, illuminating the path toward a brighter and more compassionate future.
                            </p>
                        </div>
                    </div>
                </div>
                <div id = 'isolde-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container gradient-background'>
                            <Image src = {IsoldeHeadshot} alt = 'A photo of Seraphina Lifescribe. She is a wise and elderly sage, and you can see it through her wrinkles. She long black hair, tanned skin, and striking blue eyes. ' className = 'prof-headshot' id = 'isolde-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Isolde Moonshaper
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Introducing Professor Isolde Moonshaper, the ethereal embodiment of enchantment and runecraft within the hallowed halls of Aetherium. Born of the ancient tree from which she draws her essence, Isolde possesses a natural beauty that mirrors the splendor of the forest itself.
                            </p>
                            <br></br>
                            <p>
                                Standing tall and graceful at 6 feet, Isolde exudes an air of tranquility and wisdom, her form adorned with roots and leaves that speak to her connection with the natural world. Her long, graceful fingers dance with the subtle energies of magic, while her hair cascades in a canopy of dark brown and gold, reminiscent of the autumnal hues of dying leaves.
                            </p>
                            <br></br>
                            <p>
                                As an arcane dryad, Isolde possesses a deep understanding of the intricate interplay between magic and craftsmanship. Through her teachings, students are guided on a journey of discovery, learning to blend the mystical with the practical to create powerful runes and magical artifacts of unparalleled beauty and potency.
                            </p>
                            <br></br>
                            <p>
                                With Professor Moonshaper as their guide, students delve into the enchanting realm of runecraft, exploring the boundless possibilities of magic and unlocking their creative potential. Isolde's gentle guidance and unwavering dedication to her craft inspire students to embrace the transformative power of enchantment, shaping the future of magical innovation and creativity at Aetherium.
                            </p>
                        </div>
                    </div>
                </div>
                <div id = 'magnus-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container gradient-background'>
                            <Image src = {MagnusHeadshot} alt = 'A photo of Magnus Stoneheart. He is a giant, literally, and has strong features to boot. With thick black hair and eyebrows, tribal facial tattoos, and strong, blue eyes, it is easy to understand why Magnus is so admired.' className = 'prof-headshot' id = 'magnus-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Magnus Stoneheart
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Introducing Professor Magnus Stoneheart, the embodiment of unyielding strength and resilience in the realm of earth-based martial arts and defense. Towering at an impressive 10 feet tall, Magnus is a gentle giant whose formidable presence belies his kind and compassionate nature.
                            </p>
                            <br></br>
                            <p>
                                Born into a family of giants, Magnus possesses the unmistakable features of the Jomon people, with a square jaw, wide nose, and strong hands that speak to his ancestral heritage. Despite his imposing stature, Magnus exudes a quiet stoicism and inner strength that resonates with all who encounter him.
                            </p>
                            <br></br>
                            <p>
                                As the architect of an ancient form of martial arts deeply rooted in the earth itself, Magnus imparts invaluable lessons of resilience and endurance to his students. Through his teachings, students learn to draw upon the innate strength of the earth, forging a connection with the very fabric of existence and emerging as formidable defenders capable of withstanding any challenge.
                            </p>
                            <br></br>
                            <p>
                                With Professor Stoneheart as their guide, students embark on a transformative journey of self-discovery and empowerment, honing their skills to become guardians of peace and protectors of the realm. Under his watchful eye, the legacy of earth-based martial arts thrives, shaping the next generation of defenders and champions.
                            </p>
                        </div>
                    </div>
                </div>
                <div id = 'cael-about-container'>
                    <div className = 'prof-grid-container'>
                        <div className = 'headshot-container gradient-background'>
                            <Image src = {CaelHeadshot} alt = "A photo of Caelum Skyseeker. The first thing you notice about Caelum is her eyes: large pools of white bisecting a small, round, dark face. Dark as in “midnight”; Caelum's skin is darker than humanly possible. Elves are marked by their heavenly beauty, long, white hair, pointed ears, intelligence, and impossibly long lifespans." className = 'prof-headshot' id = 'cael-headshot'></Image>
                            <div className = 'prof-course-list'>
                                <ul>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                    <li>
                                        placeholder
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className = 'prof-name-full' style={{ fontFamily: english.style.fontFamily }}>
                            Caelum Skyseeker
                        </div>
                        <div className = 'prof-bio-full'>
                            <p>
                                Introducing Professor Caelum Skyseeker, an esteemed celestial scholar whose profound insights into the cosmos illuminate the path to understanding destiny. With eyes as deep and vast as the night sky itself, Caelum guides students on a journey of cosmic discovery, unraveling the secrets of fate through celestial navigation and astrology.
                            </p>
                            <br></br>
                            <p>
                                Caelum possesses a warmth and intelligence that captivates all who encounter her. As an elf of celestial lineage, her midnight skin and contrasting white hair hint at her connection to the heavens, while her hidden elven ears and intricate white tattoos add to her enigmatic charm.
                            </p>
                            <br></br>
                            <p>
                                Through her teachings, students are transported to the furthest reaches of the cosmos, where they gain a deeper understanding of the celestial forces that govern the universe. With Caelum as their guide, students embark on a transformative journey of self-discovery and enlightenment, delving into the mysteries of the cosmos and unlocking the secrets of their own destinies.
                            </p>
                            <br></br>
                            <p>
                                With her gentle demeanor and boundless wisdom, Professor Skyseeker inspires a sense of wonder and awe in her students, fostering a love for the celestial arts that transcends the limits of mortal understanding. Under her guidance, students learn to navigate the vast expanse of the heavens and chart their own course through the tapestry of fate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className = 'section-title-learn english-font' id='section-title-courses'>
                    Courses
                </div>
                <div id = 'courses-container'>
                    <div className = 'school-holder-grid' id = 'arcane-school-holder'>
                        <span className = 'grid-school' style={{ fontFamily: english.style.fontFamily }}>
                            Magic & Arcane Arts
                        </span>
                        <div className = 'course-desc-container' id = 'arcane-course-1'>
                                <span className = 'grid-course-title english-font'>
                                    Alchemy and Potioncraft: Crafting Magical Elixirs
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        This introductory class offers students a glimpse into the arcane world of alchemy and potion crafting, steeped in the traditions of white magic and healing.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Ancient Alchemical Wisdom:</i>&nbsp; Delve into the rich tapestry of alchemical lore and ancient wisdom, unraveling the secrets of magical elixirs that have stood the test of time.
                                        </li>
                                        <li>
                                            <i>Healing Potions and Elixers:</i>&nbsp; Learn the art of concocting potent brews and elixirs infused with the healing energies of nature, designed to restore vitality and promote spiritual well-being.
                                        </li>
                                        <li>
                                            <i>Ethereal Ingredients:</i>&nbsp;Explore the mystical properties of ethereal ingredients and mystical essences, harnessing their transformative powers to create elixirs that transcend the mundane and touch the realms of the divine.
                                        </li>
                                        <li>
                                            <i>Hands-On Crafting:</i>&nbsp;Immerse yourself in practical potioncraft as you hone your skills through hands-on experimentation and guided instruction, mastering the delicate art of alchemical synthesis.
                                        </li>
                                    </ul>
                                </span>
                        </div>
                
                        <div className = 'course-desc-container' id = 'arcane-course-2'>
                                <span className = 'grid-course-title english-font english-font'>
                                    Arcane Lore and History: Uncovering the Mysteries of Magic
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                    This foundational class is a cornerstone of magical education, guiding students through the annals of magical history while unveiling the secrets of ancient mysticism.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Historical Insights:</i>&nbsp;Journey through the ages as you explore the rich tapestry of magical history, from the arcane rituals of antiquity to the modern manifestations of mystical phenomena.
                                        </li>
                                        <li>
                                            <i>Practical Applications:</i>&nbsp;Bridge the gap between ancient wisdom and contemporary practice as you learn to harness the power of historical magic in practical and innovative ways, under the expert guidance of Seraphina Lifescribe.
                                        </li>
                                        <li>
                                            <i>Innovative Discoveries:</i>&nbsp;Unlock Professor Lifescribe's proprietary insights and innovative discoveries as she shares her groundbreaking research and inventions, pushing the boundaries of magical knowledge and application.
                                        </li>
                                        <li>
                                            <i>Transcendent Transformation:</i>&nbsp;Experience profound personal growth and spiritual evolution as you delve into the mysteries of magic, unlocking hidden potentials and expanding your understanding of the mystical arts.
                                        </li>
                                    </ul>
                                </span>
                        </div>

                        <div className = 'course-desc-container' id = 'arcane-course-3'>
                                <span className = 'grid-course-title english-font'>
                                    Enchanted Item Restoration
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                    Guided by the masterful Isolde Moonshaper, this enchanting class offers students a unique opportunity to delve into the intricacies of magical craftsmanship and restoration.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Craftsmanship Mastery:</i>&nbsp;Immerse yourself in the art of magical craftsmanship as you learn to repair and enhance enchanted items under the expert guidance of Isolde Moonshaper, a renowned artisan and arcane myth.
                                        </li>
                                        <li>
                                            <i>Restoration Techniques:</i>&nbsp;Unlock the secrets of enchanted item restoration through a comprehensive exploration of specialized techniques, from delicate repairs to powerful enhancements, tailored to suit every artifact's unique essence.
                                        </li>
                                        <li>
                                            <i>Mystical Insights:</i>&nbsp;Gain invaluable insights into the mystical properties and arcane energies imbued within enchanted artifacts.
                                        </li>
                                        <li>
                                            <i>Transcendent Transformation:</i>&nbsp;Experience the transformative power of magical restoration as you breathe new life into ancient relics and artifacts, forging a deeper connection to the mystical forces that shape the fabric of reality.
                                        </li>
                                    </ul>
                                </span>
                        </div>
                
                        <div className = 'course-desc-container' id = 'arcane-course-4'>
                                <span className = 'grid-course-title english-font'>
                                    Ethereal Healing Techniques: Mending the Spirit
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        Led by Seraphina Lifescribe, this enchanting class invites students to delve into the profound realms of spiritual healing and rejuvenation.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Sacred Wisdom:</i>&nbsp;Navigate through ancient healing practices and esoteric wisdom to mend the wounds of the soul, cultivating inner harmony and spiritual well-being.
                                        </li>
                                        <li>
                                            <i>Holistic Rejuvenation:</i>&nbsp;Explore the interconnectedness of mind, body, and spirit as you learn to harmonize and balance the ethereal energies that shape our essence.
                                        </li>
                                        <li>
                                            <i>Celestial Guidance:</i>&nbsp;Awaken your intuitive abilities and connect with higher realms of consciousness, guided by the celestial insights and profound wisdom of Professor Lifescribe.
                                        </li>
                                        <li>
                                            <i>Empowering Transformation:</i>&nbsp;Harness the transformative power of ethereal healing to ignite profound inner shifts and facilitate personal growth, self-discovery, and spiritual evolution.
                                        </li>
                                    </ul>
                                </span>
                        </div>
            
                        <div className = 'course-desc-container' id = 'arcane-course-5'>
                                <span className = 'grid-course-title english-font'>
                                    Illusionary Enchantment: Mastering the Art of Deception
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                    Guided by the esteemed Isolde Moonshaper, this spellbinding class offers students a profound exploration of illusionary techniques and the art of manipulating perception.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Craft Convincing Illusions:</i>&nbsp;Immerse yourself in the art of illusionary enchantment as you learn to craft intricate illusions and weave spells of deception.
                                        </li>
                                        <li>
                                            <i>Manipulate Perception:</i>&nbsp;Unlock the secrets of perception manipulation through a comprehensive study of illusionary techniques, honing your ability to shape reality and confound the senses with mesmerizing illusions.
                                        </li>
                                        <li>
                                            <i>Dive Into Illusion Magic:</i>&nbsp;Gain invaluable insights into the mystical intricacies of illusion magic, delving deep into the art of creating immersive experiences and weaving spells that blur the line between reality and illusion.
                                        </li>
                                        <li>
                                            <i>Unravel the Mysteries:</i>&nbsp;Experience the thrill of unraveling the mysteries of illusionary enchantment as you master the subtle nuances of deception, forging a path towards mastery in the captivating world of illusion magic.
                                        </li>
                                    </ul>
                                </span>
                        </div>
           
                        <div className = 'course-desc-container' id = 'arcane-course-6'>
                                <span className = 'grid-course-title english-font'>
                                    Nature&apos;s Embrace: Healing in the Wilderness
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        This course, taught by the esteemed duo Seraphina Lifescribe and Magnus Stoneheart, invites students to embark on a transformative journey into the heart of the wilderness, where the serene dance of healing magic and the grounded strength of earth-based martial arts converge.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Holistic Nature Retreats:</i>&nbsp;Delve into the therapeutic wonders of nature as you engage in outdoor activities designed to harmonize mind, body, and spirit.
                                        </li>
                                        <li>
                                            <i>Healing Rituals in the Wilderness:</i>&nbsp;Learn to channel healing energies amidst the tranquil beauty of the natural world, guided by Seraphina's expertise in white magic.
                                        </li>
                                        <li>
                                            <i>Earthbound Martial Arts Practices:</i>&nbsp;Experience the synergy between the earth's energies and martial arts techniques, honing resilience and strength under the tutelage of Magnus Stoneheart.
                                        </li>
                                        <li>
                                            <i>Mindful Nature Meditation:</i>&nbsp;Cultivate a deeper connection to the elements through meditation practices, fostering a sense of balance and rejuvenation.
                                        </li>
                                    </ul>
                                </span>
                        </div>
            
                        <div className = 'course-desc-container' id = 'arcane-course-7'>
                                <span className = 'grid-course-title english-font'>
                                    Pyro-Healing Nexus: Restorative Flames
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        Guided by the illustrious Ignis Flameheart, this captivating class invites students to explore the intricate fusion of healing magic and elemental fire manipulation.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                    </ul>
                                    <li>
                                        <i>Harnessing Elemental Energy:</i>&nbsp;Learn to channel the primal power of fire to heal and rejuvenate, mastering the delicate balance between pyromancy and restorative magic.
                                    </li>
                                    <li>
                                        <i>Natural Harmony:</i>&nbsp;Immerse yourself in the healing embrace of nature as you uncover the synergies between elemental fire and the rejuvenating energies of the natural world.
                                    </li>
                                    <li>
                                        <i>Spiritual Rejuvenation:</i>&nbsp;Cultivate a deeper connection to the elemental forces of fire and spirit, tapping into their transformative energies for spiritual growth and well-being.
                                    </li>
                                    <li>
                                        <i>Igniting Inner Flames:</i>&nbsp;Ignite your inner spark of potential as you explore the depths of pyro-healing mastery under the guidance of Ignis Flameheart, a revered guardian of elemental wisdom.
                                    </li>
                                </span>
                        </div>

                        <div className = 'course-desc-container' id = 'arcane-course-8'>
                                <span className = 'grid-course-title english-font'>
                                    Sacred White Magic: Purification and Restoration
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        Students are invited to unlock the secrets of white magic, investigating the transformative realms of purification and restoration.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Ancient Scripts Unveiled:</i>&nbsp;Join Professor Lifescribe as she unveils the ancient scripts of sacred white magic, providing a gateway to spells steeped in purity and renewal.
                                        </li>
                                        <li>
                                            <i>Purification Rituals:</i>&nbsp;Learn the intricacies of sacred rituals designed to purify the spirit, cleanse energies, and create a harmonious connection with the mystical forces.
                                        </li>
                                        <li>
                                            <i>Restorative Incantations:</i>&nbsp;Discover the art of restorative white magic, exploring spells and incantations that promote healing, rejuvenation, and the restoration of balance.
                                        </li>
                                        <li>
                                            <i>Magical Herbology:</i>&nbsp;Delve into the world of magical herbology, and come out understanding the properties and applications of enchanted herbs for purification and restoration.
                                        </li>
                                    </ul>
                                </span>
                        </div>
                
                        <div className = 'course-desc-container' id = 'arcane-course-9'>
                                <span className = 'grid-course-title english-font'>
                                    Sage's Resilience: Earth-Healing Techniques
                                </span>
                                <span className = 'grid-course-desc'>
                                    <p>
                                        Among the inaugural offerings at Aetherium, this extraordinary class has endured the ages. Led by the indomitable duo Magnus Stoneheart and Seraphina Lifescribe, it merges the ancient disciplines of earth-based martial arts and healing magic, offering students a profound journey towards holistic well-being and inner strength.
                                    </p>
                                    <ul>
                                        <span>
                                            Course Features:
                                        </span>
                                        <li>
                                            <i>Harmonious Fusion:</i>&nbsp;Experience the seamless integration of earth-based martial arts and healing magic as you delve into the sacred union of physical and spiritual resilience.
                                        </li>
                                        <li>
                                            <i>Empowering Techniques:</i>&nbsp;Learn potent techniques rooted in ancient wisdom, empowering yourself with the ability to cultivate resilience and fortitude through a synergy of earth-bound combat and mystical healing practices.
                                        </li>
                                        <li>
                                            <i>Spiritual Renewal:</i>&nbsp;Embark on a transformative quest of spiritual renewal and self-discovery, tapping into the ancient energies of the earth to rejuvenate mind, body, and spirit.
                                        </li>
                                        <li>
                                            <i>Unveiling Inner Strength:</i>&nbsp;Discover the hidden depths of your inner strength as you harness the elemental forces of the earth, unlocking a profound sense of resilience and empowerment within yourself and the world around you.
                                        </li>
                                    </ul>
                                </span>
                        </div>
                    </div>
 
                    <div className = 'school-holder-grid' id = 'strategy-school-holder'>
                        <span className = 'grid-school' style={{ fontFamily: english.style.fontFamily }}>
                            Weaponry & Tactics
                        </span>
                        <div className = 'course-desc-container' id = 'strategy-course-1'>
                            <span className = 'grid-course-title english-font'>
                                Advanced Swordsmanship and Battle Strategy
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Step into a dynamic learning environment where theory meets practice and students are honed into formidable warriors and tactical geniuses through hands-on experiences and immersive simulations.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Hands-On Swordplay:</i>&nbsp;Master a variety of sword techniques and styles, from elegant rapiers to powerful longswords, under the expert guidance of Garrick Ironfist, a seasoned warrior with decades of battlefield experience.
                                    </li>
                                    <li>
                                        <i>Tactical Warfare Simulations:</i>&nbsp;Engage in thrilling simulations and strategic exercises, where you'll apply your knowledge of battle tactics to real-world scenarios, from siege warfare to guerrilla tactics, and devise ingenious strategies to outmaneuver your foes.
                                    </li>
                                    <li>
                                        <i>Historical Analysis:</i>&nbsp;Explore the strategies and tactics of legendary military leaders throughout history, from Elminster to Drizzt Do'Urden, and draw inspiration from their triumphs and failures to inform your own strategic thinking.
                                    </li>
                                    <li>
                                        <i>Leadership Development:</i>&nbsp;Cultivate your leadership skills as you learn to inspire and motivate troops, fostering camaraderie and esprit de corps essential for success on the battlefield. Through team-based challenges and group projects, discover the true essence of effective leadership in times of war.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-2'>
                            <span className = 'grid-course-title english-font'>
                                Advanced Weapon Smithing: Crafting Legendary Arms
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Immerse yourself in the ancient craft of weapon smithing and enchantment. Led by the esteemed duo Garrick Ironfist and Isolde Moonshaper, this  class delves deep into the art of forging legendary weapons infused with powerful enchantments.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Hands-On Forging:</i>&nbsp;Gain practical experience in the forge as you learn advanced techniques for shaping metal and crafting intricate weapon designs.
                                    </li>
                                    <li>
                                        <i>Magical Infusion:</i>&nbsp;Explore the mystical art of enchantment as you imbue your creations with potent magical properties, enhancing their strength and imbuing them with extraordinary abilities.
                                    </li>
                                    <li>
                                        <i>Customization and Personalization:</i>&nbsp;Discover the art of tailoring weapons to individual preferences and combat styles, ensuring that each weapon forged is a unique masterpiece suited to its wielder.
                                    </li>
                                    <li>
                                        <i>Legendary Arms:</i>&nbsp;Forge weapons of legendary status, capable of shaping the course of battles and becoming revered artifacts throughout the realms.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-3'>
                            <span className = 'grid-course-title english-font'>
                                Arcane Warfare: Enchanted Tactics
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>This immersive class provides a comprehensive understanding of the intricate relationship between blacksmithing, enchanted weaponry, and strategic battlefield tactics. Through a blend of theoretical exploration and hands-on application, students embark on a transformative journey, uncovering the secrets of magic-infused warfare and honing their skills to become formidable warriors on the battlefield. 
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Theoretical Foundations:</i>&nbsp;Explore the theoretical underpinnings of magic in warfare, delving into the history of enchanted weaponry and its significance on the battlefield.
                                    </li>
                                    <li>
                                        <i>Legendary Weaponry:</i>&nbsp;Study legendary weapons from myth and history, analyzing their enchantments and strategic applications to gain insight into the art of war.
                                    </li>
                                    <li>
                                        <i>Practical Enchantment Techniques:</i>&nbsp;Learn fundamental enchantment techniques and methodologies, gaining hands-on experience in infusing weapons with magical properties.
                                    </li>
                                    <li>
                                        <i>Tactical Advantage:</i>&nbsp;Discover how to apply enchantments and weaponry tactics for strategic advantage in combat scenarios, honing your skills to become a formidable force on the battlefield.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-4'>
                            <span className = 'grid-course-title english-font'>
                                Archery Precision and Tactical Deployment
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    This dynamic class transcends the traditional confines of archery, exploring a spectrum of projectile weaponry and field tactics amidst the sprawling expanse of our outdoor training grounds. Embark on a journey of skill, strategy, and outdoor adventure in "Archery", where every shot counts, and every tactic shapes your path to mastery.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Mastery of Precision:</i>&nbsp;Hone your skills in archery to achieve unparalleled accuracy, mastering the art of hitting targets with pinpoint precision from various distances.
                                    </li>
                                    <li>
                                        <i>Tactical Deployment:</i>&nbsp;Learn strategic deployment techniques, discovering how to maneuver effectively on the battlefield, position yourself for optimal advantage, and adapt to changing combat scenarios.
                                    </li>
                                    <li>
                                        <i>Diverse Projectile Expertise:</i>&nbsp;Explore an array of projectile weapons beyond archery, including javelins, throwing axes, and more, cultivating versatility and adaptability in combat situations.
                                    </li>
                                    <li>
                                        <i>Outdoor Immersion:</i>&nbsp;Engage in immersive outdoor training sessions amidst the natural beauty of our training grounds, where the elements become your allies and adversaries alike, fostering a deeper connection with the environment and enhancing your combat prowess.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-5'>
                            <span className = 'grid-course-title english-font'>
                                Foundations of Combat Strategy
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    This essential introduction delves into the core principles of battlefield awareness, tactical positioning, and strategic decision-making, setting the stage for your journey to martial mastery.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Fundamental Principles:</i>&nbsp;Explore the essential tenets of combat strategy, gaining insights into battlefield dynamics, threat assessment, and the strategic use of terrain to gain a tactical advantage.
                                    </li>
                                    <li>
                                        <i>Tactical Positioning:</i>&nbsp;Learn the art of tactical positioning, mastering techniques to maneuver effectively on the battlefield, anticipate enemy movements, and exploit vulnerabilities in the opponent's defense.
                                    </li>
                                    <li>
                                        <i>Interactive Learning:</i>&nbsp;Engage in a blend of lectures, simulations, and hands-on exercises, allowing you to apply theoretical concepts in practical scenarios and develop your strategic thinking and decision-making skills in real-time.
                                    </li>
                                    <li>
                                        <i>Mentorship and Collaboration:</i>&nbsp;Experience personalized mentorship and foster collaborative learning environments, where you'll receive individualized guidance from Garrick Ironfist and collaborate with peers to develop innovative strategies and tactics tailored to your strengths
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-6'>
                            <span className = 'grid-course-title english-font'>
                                Siege Warfare Techniques
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Aspiring tacticians will explore the art of besieging and defending fortified positions, gaining invaluable insights into the complexities of siege warfare throughout history and its application in modern conflicts. From catapults to trebuchets, students will learn to command siege engines and orchestrate decisive assaults, honing their skills to become formidable leaders on the battlefield.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Fortress Assault Simulations:</i>&nbsp;Engage in realistic simulations of fortress assaults, where you'll lead your forces against fortified strongholds and devise strategies to breach enemy defenses.
                                    </li>
                                    <li>
                                        <i>Strategic Siege Planning:</i>&nbsp;Learn the principles of strategic siege planning, including reconnaissance, blockade tactics, and siegecraft, to effectively lay siege to enemy strongholds and secure victory.
                                    </li>
                                    <li>
                                        <i>Defensive Strategies:</i>&nbsp;Explore defensive tactics and fortification design, understanding how to fortify positions, repel assaults, and withstand prolonged sieges to protect your territories.
                                    </li>
                                    <li>
                                        <i>Siege Weaponry Mastery:</i>&nbsp;Master the operation of siege weapons such as battering rams, siege towers, and ballistae, acquiring the skills to wield these powerful tools with precision and effectiveness.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-7'>
                            <span className = 'grid-course-title english-font'>
                                Stealth and Infiltration: The Art of Subterfuge
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                   Delve into the realm of covert operations and espionage as you unravel the secrets of stealth, deception, and infiltration. Whether you seek to gather intelligence behind enemy lines or execute precision strikes with deadly efficiency, this course equips you with the skills and tactics to navigate the shadows and emerge victorious.
                                </p>
                                <ul>
                                    <span>
                                        Couse Features:
                                    </span>
                                    <li>
                                        <i>Covert Operations Training:</i>&nbsp;Hone your skills in the arts of concealment, disguise, and silent movement, mastering the techniques essential for stealthy infiltration and reconnaissance missions.
                                    </li>
                                    <li>
                                        <i>Intelligence Gathering Techniques:</i>&nbsp;Learn the methods and tools of espionage, including surveillance, interrogation, and cryptography, to gather vital information and exploit enemy weaknesses.
                                    </li>
                                    <li>
                                        <i>Precision Strikes and Sabotage:</i>&nbsp;Explore the principles of precision strikes and sabotage operations, studying target prioritization, asset denial, and covert elimination to disrupt enemy operations and sow chaos behind enemy lines.
                                    </li>
                                    <li>
                                        <i>Night Operations and Camouflage:</i>&nbsp;Acquire expertise in nocturnal operations and camouflage techniques, harnessing the cover of darkness and natural terrain to evade detection and execute missions under the cloak of night.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'strategy-course-8'>
                            <span className = 'grid-course-title english-font'>
                                Strategic Warfare: The Art of Battle Planning
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Delve deep into the intricacies of military strategy and tactics as you learn to orchestrate grand campaigns and outmaneuver your adversaries on the battlefield. From analyzing terrain and troop deployments to crafting decisive battle plans, this course equips you with the knowledge and skills to command with mastery and achieve victory in the art of war.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Terrain Analysis and Tactical Mapping:</i>&nbsp;Learn to assess terrain features and strategic chokepoints, utilizing maps and reconnaissance data to identify favorable positions and plan tactical maneuvers for maximum advantage.
                                    </li>
                                    <li>
                                        <i>Battle Plan Formulation:</i>&nbsp;Master the principles of battle plan development, from setting objectives and allocating resources to coordinating troop movements and anticipating enemy responses, to craft comprehensive strategies that secure victory on the battlefield.
                                    </li>
                                    <li>
                                        <i>Alliance Diplomacy and Coalition Warfare:</i>&nbsp;Explore the intricacies of alliance diplomacy and coalition building, studying historical examples and diplomatic tactics to forge strategic partnerships and leverage combined military strength against common foes.
                                    </li>
                                    <li>
                                        <i>Strategic Decision-Making and Adaptation:</i>&nbsp;Develop your capacity for strategic thinking and adaptability, analyzing evolving battlefield conditions and adjusting your plans in real-time to exploit emerging opportunities and overcome unexpected challenges.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        
                        <div className = 'course-desc-container' id = 'strategy-course-9'>
                            <span className = 'grid-course-title english-font'>
                                Unyielding Defense Techniques
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Dive deep into the art of defense as you learn to fortify your mind, body, and spirit against the onslaught of adversity, mastering both classic defense strategies and ancient earth-based martial arts techniques. From impenetrable shields to unbreakable spirits, this course empowers you to become an unshakeable bastion of defense on the battlefield.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Mental and Physical Resilience:</i>&nbsp;Cultivate unwavering mental fortitude and physical strength through rigorous training in earth-based martial arts, forging a resilient spirit capable of withstanding any challenge.
                                    </li>
                                    <li>
                                        <i>Defensive Combat Techniques:</i>&&nbsp;Master the art of defensive combat, honing your skills in shield defense, parrying, and counterattacks to repel enemy assaults and maintain an impenetrable line of defense.
                                    </li>
                                    <li>
                                        <i>Grounding and Centering:</i>&nbsp;Harness the power of earth-based martial arts to ground yourself in the present moment, centering your mind and body to maintain calmness and focus amidst the chaos of battle.
                                    </li>
                                    <li>
                                        <i>Collaborative Defense Strategies:</i>&nbsp;Explore the synergies between individual prowess and collective defense, learning to coordinate with allies and leverage each other's strengths to form an unyielding defensive front against enemy incursions.
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className = 'school-holder-grid' id = 'astron-school-holder'>
                        <span className = 'grid-school' style={{ fontFamily: english.style.fontFamily }}>
                            Astrological Studies & Navigation
                        </span>
                        <div className = 'course-desc-container' id = 'astron-course-1'>
                            <span className = 'grid-course-title english-font'>
                                Astro-Enchantments: Celestial Runecraft with Caelum and Isolde
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on a celestial journey of enchantment and cosmic discovery with our captivating course, "Astro-Enchantments," co-taught by the visionary duo, Caelum Skyseeker and Isolde Moonshaper. Delve into the mystical realms of celestial navigation and arcane enchantment as you unlock the secrets of intricate runes imbued with the power of the stars.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Celestial Insights:</i>&nbsp;Explore the celestial wonders of the night sky, gaining profound insights into the movements of the stars and their influence on magical energies, guiding you in the creation of celestial-inspired runes.
                                    </li>
                                    <li>
                                        <i>Enchantment Mastery:</i>&nbsp;Harness the art of enchantment to infuse your runes with celestial magic, unlocking their full potential and bestowing them with otherworldly powers capable of shaping destiny and altering reality.
                                    </li>
                                    <li>
                                        <i>Rune Crafting Techniques:</i>&nbsp;Learn the ancient craft of rune crafting, mastering the intricate techniques required to inscribe celestial symbols onto various mediums and imbue them with potent magical properties.
                                    </li>
                                    <li>
                                        <i>Cosmic Synergy:</i>&nbsp;Discover the harmonious synergy between celestial navigation and enchantment, blending the wisdom of the cosmos with the artistry of magic to create runes that resonate with the very fabric of the universe.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-2'>
                            <span className = 'grid-course-title english-font'>
                                Astro-Navigation: Navigating the Astral Realms
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                Embark on a celestial odyssey of discovery and enlightenment into the boundless expanse of the astral realms. Delve into the mysteries of the cosmos as you learn to chart your course through the ethereal expanse of the cosmos.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Celestial Cartography:</i>&nbsp;Master the art of celestial mapmaking, learning to navigate the astral realms by charting the movements of the stars, planets, and constellations with precision and accuracy.
                                    </li>
                                    <li>
                                        <i>Astral Projection Techniques:</i>&nbsp;Explore the ancient practice of astral projection, honing your ability to transcend physical boundaries and journey through the astral plane to explore otherworldly realms and dimensions.
                                    </li>
                                    <li>
                                        <i>Cosmic Harmonics:</i>&nbsp;Dive into the study of cosmic energies and vibrations, understanding how the resonance of celestial bodies influences the fabric of reality and shapes the astral landscape.
                                    </li>
                                    <li>
                                        <i>Interdimensional Travel:</i>&nbsp;Unlock the secrets of interdimensional travel, discovering portals and gateways that connect different planes of existence and learning to traverse the astral realms with ease.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-3'>
                            <span className = 'grid-course-title english-font'>
                                Astrological Insights: Understanding Cosmic Influences
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on a transformative journey of cosmic exploration and self-discovery, as you unlock the ancient wisdom of astrology and gain profound insights into the cosmic influences shaping your destiny.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Celestial Divination:</i>&nbsp;Learn the art of celestial divination, interpreting the movements of the stars and planets to gain insights into past, present, and future events, and unravel the mysteries of your own destiny.
                                    </li>
                                    <li>
                                        <i>Planetary Influences:</i>&nbsp;Explore the profound influence of planetary alignments and celestial configurations on individual personalities, relationships, and life events, unlocking the secrets of cosmic harmony and balance.
                                    </li>
                                    <li>
                                        <i>Astrological Chart Analysis:</i>&nbsp;Master the techniques of astrological chart analysis, deciphering the intricate patterns and symbols of birth charts to reveal the unique qualities and potentialities of each individual's cosmic blueprint.
                                    </li>
                                    <li>
                                        <i>Cosmic Synchronicity:</i>&nbsp;Discover the interconnectedness of the cosmos and the profound synchronicities that shape our lives, as you deepen your understanding of the cosmic dance between the celestial bodies and the human experience.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-4'>
                            <span className = 'grid-course-title english-font'>
                                Celestial Cartography: Mapping the Stars
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Delve into the intricate art of celestial navigation and charting as you unravel the secrets of the heavens and chart your course through the cosmic tapestry in this advanced course.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Astral Charting Techniques:</i>&nbsp;Master the sophisticated techniques of astral charting, utilizing advanced tools and methodologies to map the intricate patterns and celestial phenomena spanning the vast reaches of space.
                                    </li>
                                    <li>
                                        <i>Stellar Phenomena Observation:</i>&nbsp;Explore the myriad phenomena of the cosmos, from nebulae and galaxies to supernovae and black holes, as you hone your observational skills and deepen your understanding of the celestial wonders that populate the universe.
                                    </li>
                                    <li>
                                        <i>Planetary Alignment Analysis:</i>&nbsp;Investigate the intricate dance of the planets and their alignment within the celestial sphere, deciphering the subtle influences and cosmic harmonies that shape the destinies of worlds and civilizations.
                                    </li>
                                    <li>
                                        <i>Advanced Celestial Navigation:</i>&nbsp;Navigate the celestial seas with precision and skill, as you delve into the intricacies of celestial navigation techniques, from astrolabes to sextants, and chart your course through the uncharted realms of space.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-5'>
                            <span className = 'grid-course-title english-font'>
                                Celestial Navigation Basics
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on a celestial voyage through the timeless expanse of the night sky with our introductory course, "Basics," guided by the esteemed Caelum Skyseeker. Discover the wonders of the cosmos as you learn the foundational principles of celestial navigation, illuminating the pathways of the stars and unlocking the secrets of the celestial realm.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Star Identification:</i>&nbsp;Learn to navigate the heavens by identifying key celestial bodies, from bright stars to distant constellations, as you develop the skills to chart your course by the guiding light of the stars.
                                    </li>
                                    <li>
                                        <i>Constellation Mapping:</i>&nbsp;Delve into the mythology and lore of the constellations as you map their intricate patterns across the celestial canvas, uncovering the timeless stories etched into the fabric of the night sky.
                                    </li>
                                    <li>
                                        <i>Basic Astronomical Principles:</i>&nbsp;Explore the fundamental principles of astronomy, from celestial motion to planetary orbits, as you gain insights into the mechanics of the cosmos and the forces that govern the movements of the celestial bodies
                                    </li>
                                    <li>
                                        <i>Practical Navigation Exercises:</i>&nbsp;Put theory into practice with hands-on observation and practical exercises, honing your celestial navigation skills as you embark on guided journeys through the night sky, charting your course among the stars.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-6'>
                            <span className = 'grid-course-title english-font'>
                                Celestial Navigation in Spellcasting
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Delve into the mystical interplay between the heavens and magic as you harness the power of celestial navigation to enhance your spellcasting abilities and unlock the secrets of the cosmos.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Cosmic Spellcraft:</i>&nbsp;Unleash the full potential of your magical abilities as you integrate celestial navigation techniques into your spellcasting, tapping into the celestial energies to imbue your spells with newfound potency and precision.
                                    </li>
                                    <li>
                                        <i>Astral Alignment:</i>&nbsp;Align your magical intentions with the celestial currents as you learn to synchronize your spells with the movements of the stars and planets, harnessing the cosmic energies to amplify the effectiveness of your enchantments.
                                    </li>
                                    <li>
                                        <i>Celestial Spell Components:</i>&nbsp;Discover the celestial components and materials imbued with celestial energies, from stardust-infused herbs to moonlit crystals, as you enhance your spellcasting repertoire with potent ingredients sourced from the heavens.
                                    </li>
                                    <li>
                                        <i>Ritual Celestial Observations:</i>&nbsp;Engage in sacred rituals and celestial observations under the guidance of Caelum Skyseeker, as you attune yourself to the rhythms of the celestial sphere and deepen your connection to the mystical forces that shape the universe.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-7'>
                            <span className = 'grid-course-title english-font'>
                                Celestial Rituals for Guidance and Divination
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Immerse yourself in the sacred art of celestial rituals as you unlock the mysteries of the cosmos and harness the power of the stars for guidance and divination.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Celestial Divination Techniques:</i>&nbsp;Learn the ancient art of celestial divination as you explore a variety of techniques, from reading the movements of celestial bodies to interpreting celestial omens, to gain profound insights into the past, present, and future.
                                    </li>
                                    <li>
                                        <i>Astral Journeying:</i>&nbsp;Embark on transcendent astral journeys guided by the celestial energies, as you traverse the cosmic realms to seek wisdom, clarity, and spiritual guidance from the celestial beings and entities that dwell among the stars.
                                    </li>
                                    <li>
                                        <i>Sacred Celestial Symbols:</i>&nbsp;Discover the mystical symbolism of celestial bodies and constellations as you decode their hidden meanings and incorporate them into your divinatory practices, unlocking a deeper understanding of the cosmic forces at play.
                                    </li>
                                    <li>
                                        <i>Ritual Invocation and Empowerment:</i>&nbsp;Invoke the powers of the celestial realm through sacred rituals and ceremonies designed to align your intentions with the divine will, empowering your divinatory endeavors and awakening your innate intuitive gifts.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-8'>
                            <span className = 'grid-course-title english-font'>
                                Lunar Magic: Harnessing the Power of the Moon
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    From ancient civilizations to modern practitioners, the moon has captivated humanity with its ethereal beauty and potent influence, serving as a symbol of intuition, renewal, and spiritual enlightenment. In "Lunar Magic", you'll delve deep into the rich tapestry of lunar lore and legend, gaining a profound understanding of the moon's significance in magic, mythology, and mystical traditions throughout the ages.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Moon Phase Mastery:</i>&nbsp;Explore the profound influence of the moon's phases on magical workings and personal transformation, as you learn to harness the unique energies of each lunar cycle to manifest your intentions and amplify your spells.
                                    </li>
                                    <li>
                                        <i>Lunar Spellcrafting:</i>&nbsp;Unlock the secrets of lunar spellcrafting as you craft potent rituals and incantations attuned to the moon's cycles, drawing upon its mystical energies to enhance your magical practice and achieve profound results.
                                    </li>
                                    <li>
                                        <i>Lunar Attunement:</i>&nbsp;Attune your spirit to the rhythms of the moon as you deepen your connection to its divine essence, gaining insight into your innermost desires, emotions, and intuitive wisdom through lunar meditation and reflection.
                                    </li>
                                    <li>
                                        <i>Celestial Lunar Rituals:</i>&nbsp;Immerse yourself in sacred lunar rituals and ceremonies designed to honor the moon's wisdom and power, as you invoke its blessings for healing, guidance, and spiritual empowerment in your life.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'astron-course-9'>
                            <span className = 'grid-course-title english-font'>
                                Celestial Pyrokinetics: Igniting the Cosmos
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Ignite the cosmic flames of celestial power in our spellbinding course, "Celestial Pyrokinetics." Co-taught by the enigmatic Ignis Flameheart and the celestial navigator Caelum Skyseeker, this extraordinary journey merges the ancient art of celestial navigation with the mystical realm of controlled pyromancy, unlocking the secrets of celestial-infused fire spells.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Celestial Fire Mastery:</i>&nbsp;Harness the elemental energies of the cosmos to fuel your pyromantic prowess, mastering the art of celestial-infused fire spells that blaze with celestial power and precision.
                                    </li>
                                    <li>
                                        <i>Astral Alignment:</i>&nbsp;Align your spells with the celestial bodies as you learn to navigate the cosmic currents and channel their radiant energy into your pyromantic manifestations, creating spells of unparalleled potency and brilliance.
                                    </li>
                                    <li>
                                        <i>Cosmic Spellcraft:</i>&nbsp;Explore the intricacies of celestial spellcraft, from crafting celestial sigils to infusing your spells with the essence of the stars, expanding your magical repertoire and unlocking new realms of pyrokinetic potential.
                                    </li>
                                    <li>
                                        <i>Celestial Synergy:</i>&nbsp;Merge the celestial forces with your innate pyromantic abilities, forging a harmonious connection between the heavens and the flames, and unlocking the true essence of celestial pyrokinetics.
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>

                    <div className = 'school-holder-grid' id = 'elem-school-holder'>
                        <span className = 'grid-school' style={{ fontFamily: english.style.fontFamily }}>
                            Elemental Arcana
                        </span>

                        <div className = 'course-desc-container' id = 'elem-course-1'>
                            <span className = 'grid-course-title english-font'>
                                Controlled Pyrokinetics: Mastery Over Flames
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Unleash the infernal fury of controlled pyrokinetics in our captivating course, "Controlled Pyrokinetics." Led by the fiery elemental maestro, Ignis Flameheart, this transformative journey delves deep into the art of harnessing and controlling the primal forces of fire with precision and mastery.
                                </p>
                                <ul>
                                    <span>
                                        Course features:
                                    </span>
                                    <li>
                                        <i>Elemental Mastery:</i>&nbsp;Learn to command the elemental essence of fire with finesse and precision, mastering the art of controlled pyrokinetics to wield flames as extensions of your will and power.
                                    </li>
                                    <li>
                                        <i>Pyrokinetic Techniques:</i>&nbsp;Explore advanced techniques and methodologies for manipulating flames with absolute control, from shaping fire into intricate forms to extinguishing it at will, demonstrating mastery over the fiery element.
                                    </li>
                                    <li>
                                        <i>Celestial Integration:</i>&nbsp;Discover the celestial connections that empower your pyrokinetic abilities, aligning your flames with the cosmic energies of the stars to enhance their potency and imbue them with celestial brilliance.
                                    </li>
                                    <li>
                                        <i>Elemental Resonance:</i>&nbsp;Forge a profound resonance with the elemental realm, attuning yourself to the primal rhythms of fire and unlocking the depths of your pyrokinetic potential, transcending the boundaries of mortal magic.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-2'>
                            <span className = 'grid-course-title english-font'>
                               Elemental Invocation
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on a mystical odyssey into the heart of elemental magic, and be taken on a mystical quest to summon the elemental guardians and unlock the secrets of their ancient wisdom.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Elemental Lore:</i>&nbsp;Delve into the rich mythology and lore surrounding the elemental guardians of earth, air, fire, and water, unraveling the mysteries of their origins, powers, and sacred significance in the natural world.
                                    </li>
                                    <li>
                                        <i>Ritual Mastery:</i>&nbsp;Learn the intricate rituals and incantations necessary to evoke the elemental guardians from their ethereal realms, mastering the art of summoning with precision and reverence under Ignis Flameheart's expert guidance.
                                    </li>
                                    <li>
                                        <i>Elemental Communion:</i>&nbsp;Forge profound bonds with the elemental guardians through intimate communion and communication, unlocking their elemental wisdom and receiving guidance, protection, and blessings from these ancient and powerful beings.
                                    </li>
                                    <li>
                                        <i>Harmonic Balance:</i>&nbsp;Explore the delicate balance between the elemental forces, harmonizing with their energies to align yourself with the natural order of the cosmos, fostering balance, harmony, and spiritual enlightenment in your journey.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-3'>
                            <span className = 'grid-course-title english-font'>
                                Elemental Magic Primer
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on an enchanting journey into the elemental realms with the esteemed masters of Aetherium as your guides in our immersive course, "Elemental Magic Primer." Co-taught by Ignis Flameheart, Isolde Moonshaper, Magnus Stoneheart, Seraphina Lifescribe, and Caelum Skyseeker, this foundational odyssey delves into the fundamental principles of elemental magic, unveiling the mysteries of fire, water, earth, and air. As a cornerstone of education at Aetherium, "Elemental Magic Primer" is a mandatory course for every student, ensuring that all members of our esteemed academy possess a comprehensive understanding of the elemental forces that govern our world.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Elemental Fundamentals:</i>&nbsp;Delve into the foundational principles of elemental magic, unraveling the intricacies of each elemental force and understanding their unique properties, strengths, and applications in spellcasting and manipulation.
                                    </li>
                                    <li>
                                        <i>Elemental Manipulation:</i>&nbsp;Learn the art of harnessing and channeling the elemental energies of fire, water, earth, and air, mastering basic manipulation techniques to wield their powers with precision and control.
                                    </li>
                                    <li>
                                        <i>Spellcasting Techniques:</i>&nbsp;Explore a variety of spellcasting techniques tailored to each elemental affinity, from incantations and sigils to rituals and enchantments, honing your skills in the arcane arts under the guidance of our renowned instructors.
                                    </li>
                                    <li>
                                        <i>Elemental Harmony:</i>&nbsp;Discover the symbiotic relationship between the elemental forces and the natural world, cultivating a deep reverence for the balance and harmony that exists within the elemental realms, and learning to align your magic with the cosmic order.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-4'>
                            <span className = 'grid-course-title english-font'>
                                Elemental Manipulation
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Immerse yourself in the elemental lore as you unravel the mysteries of fire's ancient origins and its symbiotic relationship with life itself. Through a blend of theoretical exploration and practical exercises, students will master the art of fire manipulation, from kindling flames to shaping their ferocious energies.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Elemental Lore:</i>&nbsp;Delve into the rich history and mythology surrounding the element of fire, uncovering its significance in cultures and civilizations throughout the ages.
                                    </li>
                                    <li>
                                        <i>Practical Spellcraft:</i>&nbsp;Learn essential techniques for controlling and harnessing the power of fire, from casting spells to channeling its energy in elemental rituals.
                                    </li>
                                    <li>
                                        <i>Elemental Harmony:</i>&nbsp;Discover the interconnectedness of fire with other elemental forces, exploring how its influence extends to earth, air, and water, fostering balance and harmony in nature.
                                    </li>
                                    <li>
                                        <i>Elemental Fusion:</i>&nbsp;Unlock the secrets of elemental synergy as you explore how fire can be fused with other magical energies, enabling you to create powerful combinations and unleash devastating arcane effects.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-5'>
                            <span className = 'grid-course-title english-font'>
                                Flameforging
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Join the formidable duo of Ignis Flameheart and Garrick Ironfist in an immersive journey into the heart of Flameforging. This advanced course delves deep into the art of crafting weapons infused with the primal essence of fire, blending the mastery of blacksmithing with the elemental power of flames.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Forge of Flames:</i>&nbsp;Experience hands-on training in Garrick's legendary forge, where molten metal meets the elemental fire to create weapons of unparalleled power and resilience.
                                    </li>
                                    <li>
                                        <i>Elemental Infusion:</i>&nbsp;Learn the secrets of harnessing the raw energy of fire and infusing it into each weapon, imbuing them with the fiery essence that enhances their strength and potency.
                                    </li>
                                    <li>
                                        <i>Mastery of Wielding:</i>&nbsp;Under Garrick's seasoned guidance, hone your skills in wielding these flameforged weapons with precision and finesse, unleashing their full potential in battle.
                                    </li>
                                    <li>
                                        <i>Tactical Fire Strategies:</i>&nbsp;Explore innovative tactics and strategies for utilizing flameforged weapons on the battlefield, including the strategic deployment of fire-infused weaponry for maximum impact and domination.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-6'>
                            <span className = 'grid-course-title english-font'>
                                Flames of Renewal: Elemental Regeneration
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                Embark on this sacred quest of renewal and regeneration, where the flames of transformation ignite the soul and awaken the spirit. In "Flames of Renewal," delve deep into the mystical dance of fire and earth, where destruction gives rise to renewal and balance is restored to the natural world.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Forest Immersion:</i>&nbsp;Immerse yourself in the tranquil embrace of the forest as your classroom, where the ancient wisdom of nature becomes your greatest teacher. Experience firsthand the symbiotic relationship between fire and earth, witnessing the cycle of destruction and rebirth that defines the essence of life itself.
                                    </li>
                                    <li>
                                        <i>Elemental Meditation:</i>&nbsp;Through guided meditative practices, explore the inner depths of your being and forge a profound connection with the elemental forces of fire and earth.
                                    </li>
                                    <li>
                                        <i>Ritual of Renewal:</i>&nbsp;Participate in sacred rituals and ceremonies where the flames of renewal are kindled and the earth's regenerative powers are invoked. Learn ancient techniques for channeling elemental energies to heal and rejuvenate the land, fostering new growth and vitality in the natural world.
                                    </li>
                                    <li>
                                        <i>Spiritual Strengthening:</i>&nbsp;Develop a deeper understanding of your place within the interconnected web of life, and emerge from the experience empowered by the transformative energies of fire and earth.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-7'>
                            <span className = 'grid-course-title english-font'>
                                Harmony of Elements
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Under the tutelage of Isolde Moonshaper and Ignis Flameheart, delve into the art of creating enchanted artifacts that harmonize the primal forces of fire and enchantment, unlocking their boundless potential for versatile use.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Elemental Fusion:</i>&nbsp;Explore the intricate balance between fire and enchantment as you fuse these elemental energies together in your crafting endeavors. Learn to harness the raw power of fire and the mystic allure of enchantment to create artifacts of unparalleled potency.
                                    </li>
                                    <li>
                                        <i>Artisanal Techniques:</i>&nbsp;From shaping raw materials to imbuing them with magical properties, discover the secrets of the artisan's trade and unlock your creative potential in crafting enchanted artifacts that transcend ordinary limitations.
                                    </li>
                                    <li>
                                        <i>Versatile Utility:</i>&nbsp;Unlock the versatility of your creations as you infuse them with the harmonious energies of fire and enchantment. Whether it be enchanted weapons that blaze with magical fire or mystical artifacts imbued with elemental protection, learn to craft tools that adapt to any situation and empower their wielders with unmatched versatility.
                                    </li>
                                    <li>
                                        <i>Creative Expression:</i>&nbsp;Unleash your imagination and bring forth artifacts that reflect your unique vision and ingenuity, forging a legacy of craftsmanship that will endure through the ages.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-8'>
                            <span className = 'grid-course-title english-font'>
                                Inferno Tides
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    Embark on an exhilarating voyage across the open sea with Ignis Flameheart in "Inferno Tides." Delve into the art of fire manipulation amidst the aquatic realm, where the dance of flames meets the ebb and flow of the ocean, unveiling new depths of power and mystique.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Oceanic Alchemy:</i>&nbsp;Unlock the secrets of oceanic alchemy as you harness the synergy between fire and water to enhance your magical prowess. Learn to weave the elements together, transforming the maritime environment into a crucible of elemental power where fire dances upon the waves.
                                    </li>
                                    <li>
                                        <i>Aquatic Incantations:</i>&nbsp;Dive into the depths of arcane lore as you master the intricacies of aquatic incantations tailored for the open sea. Explore the nuances of spellcasting amidst the vast expanse of water, adapting your fiery incantations to the ever-shifting currents and tides, and unlocking their true potential in the maritime domain.
                                    </li>
                                    <li>
                                        <i>Navigational Sorcery:</i>&nbsp;Learn to harness the elemental energies of fire to guide your vessel through treacherous waters, illuminating the darkness with the radiant glow of your mystical flames and ensuring safe passage on your maritime adventures.
                                    </li>
                                    <li>
                                        <i>Elemental Harmony:</i>&nbsp;Discover how the elemental forces of fire and water intertwine to create a symphony of power, unleashing torrents of flame and steam that reflect the dynamic interplay of the elements upon the open sea.
                                    </li>
                                </ul>
                            </span>
                        </div>

                        <div className = 'course-desc-container' id = 'elem-course-9'>
                            <span className = 'grid-course-title english-font'>
                                Pyrodefensive Strategies
                            </span>
                            <span className = 'grid-course-desc'>
                                <p>
                                    In this immersive and enlightening course, students will delve into the ancient art of harnessing fire as a powerful tool for safeguarding oneself and others.From the flickering flames of a protective barrier to the radiant glow of a guardian inferno, each lesson will illuminate the myriad ways in which fire can serve as a stalwart guardian and protector in the face of adversity.
                                </p>
                                <ul>
                                    <span>
                                        Course Features:
                                    </span>
                                    <li>
                                        <i>Flame Shield Mastery:</i>&nbsp;Learn to conjure and manipulate protective barriers of flame, forming formidable shields that repel enemy attacks and provide a safeguard against harm. Develop the skills to weave intricate patterns of fire, creating resilient defenses that withstand even the most relentless assaults.
                                    </li>
                                    <li>
                                        <i>Fiery Warding Rituals:</i>&nbsp;Explore ancient rituals and incantations designed to ward off malevolent forces and shield against dark energies. Discover the potent synergy between fire magic and protective wards, empowering yourself with the ability to erect mystical barriers that banish negativity and safeguard against spiritual threats.
                                    </li>
                                    <li>
                                        <i>Elemental Counterattacks:</i>&nbsp;Unleash the elemental fury of fire in defensive combat scenarios, utilizing fiery counterattacks to turn the tide against adversaries. Learn to anticipate and neutralize enemy assaults with swift and decisive responses, harnessing the power of fire to repel aggressors and emerge unscathed from battle.
                                    </li>
                                    <li>
                                        <i>Guardian Infernos:</i>&nbsp;Master the art of creating guardian infernos, sentient manifestations of fire imbued with protective instincts and unwavering loyalty. Explore the symbiotic relationship between mage and flame as you forge bonds with these elemental guardians, entrusting them to stand sentinel against threats and defend you with their blazing might.
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Learn;
