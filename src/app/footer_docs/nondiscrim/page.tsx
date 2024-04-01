'use client'

import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import TopButton from "@/components/buttons/to_top";
import Dropdown from '@/components/reveal/dropdown';
import Signatures from '../../../../public/align_prof_signatures.png';
import '../../../styles/footer_links/nondiscrim_styles.css';

const Nondiscrim = () => {
    const languageOptions = [
        { value: 'en', label: 'English (Common)' },
        { value: 'dw', label: 'Dwarvish' },
        { value: 'el', label: 'Elvish (Sindarin - Tengwar script)' },
        { value: 'jn', label: 'Giant (Jotun)'},
        // Add more language options as needed
    ];

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <>
            <Navbar />
            <TopButton />
            <main>
                <div className='nondiscrim-container lato'>
                    <div id='nondiscrim-heading'>
                        Non-discrimination Policy
                    </div>
                    <Dropdown
                        label="Select language"
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    />
                    <div className='nondiscrim-statement'>
                        {selectedLanguage === 'en' && (
                            <>
                                <p>
                                    At Aetherium, we embrace diversity and are committed to creating an inclusive environment where all students, regardless of race, species, ethnicity, gender identity, sexual orientation, disability, religion, or any other characteristic, are valued and respected. Discrimination of any kind is strictly prohibited within our community, and we are dedicated to fostering a culture of acceptance and understanding.
                                </p>
                                <p>
                                    Our non-discrimination policy applies to all aspects of school life, including admissions, enrollment, academic programs, extracurricular activities, housing, and employment. We strive to provide equal opportunities and support to all individuals, ensuring that everyone has the chance to thrive and succeed.
                                </p>
                                <p>
                                    Any instances of discrimination or harassment will be promptly addressed by school administration, and support will be provided to those affected. We encourage students who experience or witness discrimination to report it to a trusted faculty member or staff member, who will take appropriate action to address the issue.
                                </p>
                                <p>
                                    At Aetherium, we celebrate the unique contributions of each individual and are committed to creating a safe and welcoming environment for everyone. Together, we can build a community that values diversity and promotes equity and inclusion.
                                </p>
                                <div id = 'school-slogan'>
                                    <i>Harmony in Diversity, Strength in Aetherium.</i>
                                </div>
                            </>
                        )}
                        {selectedLanguage === 'el' && (
                            <>
                            <div className = 'tengwar'>
                                <p>
                                    At Aetherium, we embrace diversity and are committed to creating an inclusive environment where all students, regardless of race, species, ethnicity, gender identity, sexual orientation, disability, religion, or any other characteristic, are valued and respected. Discrimination of any kind is strictly prohibited within our community, and we are dedicated to fostering a culture of acceptance and understanding.
                                </p>
                                <p>
                                    Our non-discrimination policy applies to all aspects of school life, including admissions, enrollment, academic programs, extracurricular activities, housing, and employment. We strive to provide equal opportunities and support to all individuals, ensuring that everyone has the chance to thrive and succeed.
                                </p>
                                <p>
                                    Any instances of discrimination or harassment will be promptly addressed by school administration, and support will be provided to those affected. We encourage students who experience or witness discrimination to report it to a trusted faculty member or staff member, who will take appropriate action to address the issue.
                                </p>
                                <p>
                                    At Aetherium, we celebrate the unique contributions of each individual and are committed to creating a safe and welcoming environment for everyone. Together, we can build a community that values diversity and promotes equity and inclusion.
                                </p>
                                <div id = 'school-slogan'>
                                    <i>Harmony in Diversity, Strength in Aetherium.</i>
                                </div>
                            </div>
                            </>
                        )}
                        {selectedLanguage === 'dw' && (
                            <>
                                <p>
                                    On Oudooteim, yu umdtotu pexutsenol op otu tammennup na ttuonel o etnisexu uxetamun yhutu onn snipuns, tulotpnuss ah totu, suteus, unhetenol, luput epunenol, suzion ateunonea, pesodenenol, tunelea, at ool anhut thototnutesnet, otu xoniup op tusutnup. Festtemeonea ah ool mep es sntetnnol tahedenup yenhe ait tammienol, op yu otu pupetonup na hasnutel o tinnitu ah ottunotu op iputsnopel.
                                </p>
                                <p>
                                    Ait apesttemeonea anetol oneus na onn osutns ah sthaan nehu, etnipel opmesseas, utannmun, otopumet taltoms, uzntotittetinot otnexeneus, haisel, op umnaolmun. Yu sntexu na taxepu usion aatnieneus op siatn na onn epexepions, usitel nhon uxutolau hos nhu thotu na nhtexu op sittuup.
                                </p>
                                <p>
                                    Ool esnotus ah pesttemeonea at hotossmun yenn du tamnnol opptussup dol sthaan opmeesntonea, op siatn yenn du taxepup na nhasu ohhutnup. Yu utaitolu snipuns yha uzuteutu at yenuss pesttemeonea na tuatn en na o ntisnup hotinnol mumdut at snohh mumdut, yha yenn nomu otateonu otnea na opptuss nhu essiu.
                                </p>
                                <p>
                                    On Ounhuteim, yu tunudtonu nhu iesiu tantedineas ah uoth epexepion op otu tammennup na ttuonel o sohu op yuntamel uxetamun hat uxutolau. Valunhut, yu to dienp o tammienol nhon xonius pexutsenol op tamanus usienol op etnisea.
                                </p>
                                <div id = 'school-slogan'>
                                    <i>Jotmaol e Fexutsenol, Untulnh e Oudooteim.</i>
                                </div>
                            </>
                        )}
                        {selectedLanguage === 'jn' && (
                            <>
                                <div className = 'runes'>
                                    <p>
                                        At Aetherium, we embrace diversity and are committed to creating an inclusive environment where all students, regardless of race, species, ethnicity, gender identity, sexual orientation, disability, religion, or any other characteristic, are valued and respected. Discrimination of any kind is strictly prohibited within our community, and we are dedicated to fostering a culture of acceptance and understanding.
                                    </p>
                                    <p>
                                        Our non-discrimination policy applies to all aspects of school life, including admissions, enrollment, academic programs, extracurricular activities, housing, and employment. We strive to provide equal opportunities and support to all individuals, ensuring that everyone has the chance to thrive and succeed.
                                    </p>
                                    <p>
                                        Any instances of discrimination or harassment will be promptly addressed by school administration, and support will be provided to those affected. We encourage students who experience or witness discrimination to report it to a trusted faculty member or staff member, who will take appropriate action to address the issue.
                                    </p>
                                    <p>
                                        At Aetherium, we celebrate the unique contributions of each individual and are committed to creating a safe and welcoming environment for everyone. Together, we can build a community that values diversity and promotes equity and inclusion.
                                    </p>
                                    <div id = 'school-slogan'>
                                        <i>Harmony in Diversity, Strength in Aetherium.</i>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div id = 'sig-holder'>
                    <Image src = {Signatures} alt = 'The signatures of every professor (Garrick, Ignis, Seraphina, Isolde, Caleum, and Magnus' id = 'prof-signatures'></Image>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Nondiscrim;
