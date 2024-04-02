'use client'

import { useEffect, useState, SetStateAction } from 'react';
import Navbar from "../../..//components/navigation/navbar";
import Footer from "../../..//components/navigation/footer";
import TopButton from "../../..//components/buttons/to_top";
import Dropdown from '../../..//components/reveal/dropdown';
import '../../../styles/footer_links/safety_agree_styles.css';

export default function SafetyAgree () {
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
            <Navbar/>
            <TopButton/>
            <main>
                <div className = 'agreement-container lato'>
                    <div id='agreement-heading'>
                        Interdimensional Safety Agreement
                    </div>
                    <Dropdown
                        label="Select language"
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    />
                    <div className='agreement-content'>
                        {selectedLanguage === 'en' && (
                            <>
                                <p className = 'subsection heading-section'>
                                    Introduction
                                </p>
                                <p>
                                    Welcome to Aetherium, where the boundaries between dimensions blur, and the mysteries of the multiverse await exploration. As a leading institution in arcane studies and interdimensional research, Aetherium is committed to ensuring the safety and well-being of all individuals engaged in interdimensional travel. This Interdimensional Safety Agreement establishes the guidelines, protocols, and regulations necessary to promote safe and responsible traversal of alternate realities and dimensions.

                                </p>
                                
                                <p className = 'subsection heading-section'>
                                    Definitions
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Interdimensional Portal:</span>&nbsp; A rift or gateway that connects two or more dimensions, allowing for the transfer of matter, energy, or consciousness between them.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Dimensional Displacement:</span>&nbsp; The process of moving from one dimension to another, either voluntarily or involuntarily, through magical, technological, or metaphysical means.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Multiversal Navigation:</span>&nbsp; The study and practice of navigating the multiverse, including the identification of stable interdimensional pathways and the manipulation of dimensional energies.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Safety Protocols
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Personal Protective Equipment (PPE):</span>&nbsp;  All travelers engaging in interdimensional journeys are required to wear appropriate PPE, including protective clothing, enchanted amulets for warding off malevolent energies, and communication devices for maintaining contact with Aetherium's dimensional control center.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Health Screenings:</span>&nbsp; Prior to embarking on interdimensional travel, travelers must undergo comprehensive health screenings to ensure they are free from contagious diseases, curses, or other conditions that may pose a risk to themselves or others in alternate dimensions.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Emergency Preparedness:</span>&nbsp; Aetherium provides extensive training and resources for responding to emergencies encountered during interdimensional travel. Travelers are equipped with emergency kits containing healing potions, dimensional stabilizers, and communication crystals for summoning assistance.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Risk Assessment:</span>&nbsp; Before embarking on a journey to a new dimension, travelers must conduct a thorough risk assessment, taking into account environmental hazards, dimensional anomalies, and potential threats from indigenous beings or entities.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Dimensonal Ethics and Regulations
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Respect for Indigenous Cultures:</span>&nbsp; Aetherium upholds a strict policy of respect for the customs, traditions, and sovereignty of indigenous civilizations encountered in alternate dimensions. Travelers must refrain from interfering with the natural development of these societies and seek to establish peaceful and mutually beneficial relationships.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Environmental Preservation:</span>&nbsp;Travelers are prohibited from engaging in activities that may cause harm or destruction to the natural environment of alternate dimensions. This includes refraining from deforestation, pollution, and other forms of environmental degradation.
                                    </li>
                                    <li>
                                        <span className ='subsection'>Non-Interference Policy:</span>&nbsp;Aetherium adheres to a non-interference policy when interacting with alternate realities and civilizations. Travelers must refrain from altering historical events, influencing political dynamics, or otherwise disrupting the natural order of alternate dimensions.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Legal Framework
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Jurisdiction and Governance:</span>&nbsp; The Interdimensional Safety Agreement is governed by the Aetherium Council of Elders, a governing body composed of experienced arcanists, scholars, and dimensional ambassadors. The Council is responsible for overseeing interdimensional travel and enforcing compliance with safety regulations.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Liability and Indemnification:</span>&nbsp; Travelers engaging in interdimensional journeys assume personal responsibility for their actions and well-being. Aetherium accepts no liability for accidents, injuries, or incidents that may occur during interdimensional travel, and travelers are required to sign waivers indemnifying the university against any claims or lawsuits.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Enforcement and Penalties
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Compliance Monitoring:</span>&nbsp; Aetherium maintains a vigilant system of compliance monitoring to ensure travelers adhere to safety protocols and regulations. Surveillance enchantments, dimensional scanners, and periodic inspections are employed to detect any breaches of the Interdimensional Safety Agreement.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Enforcement Measures:</span>&nbsp; Violations of the Interdimensional Safety Agreement may result in disciplinary action, including fines, suspension of travel privileges, and expulsion from Aetherium. Repeat offenders may face more severe penalties, including legal action and permanent banishment from interdimensional travel.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Amendments and Review
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Revision Process:</span>&nbsp; The Interdimensional Safety Agreement is subject to periodic review and revision to reflect changes in dimensional dynamics, technological advancements, and emerging threats. Proposed amendments to the agreement must be submitted to the Aetherium Council of Elders for consideration and approval.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Periodic Review:</span>&nbsp; Aetherium conducts regular reviews of the Interdimensional Safety Agreement to assess its effectiveness and identify areas for improvement. Feedback from travelers, dimensional ambassadors, and other stakeholders is solicited to ensure the agreement remains relevant and responsive to the evolving needs of the interdimensional community.
                                    </li>
                                </ol>
                                <p className = 'agree-closing-statement'>
                                    By adhering to the provisions outlined in this Interdimensional Safety Agreement, travelers can embark on their journeys with confidence, knowing that Aetherium is committed to their safety and the preservation of the multiverse.
                                </p>
                            </>
                        )}

                        {selectedLanguage === 'dw' && (
                            <>
                                 <p className = 'subsection heading-section'>
                                    Entapitnea
                                </p>
                                <p>
                                    Yuntamu na Oudooteim, yhutu nhu daipoteus dunyuu pemuseas dnit, op nhu molsnuteus ah nhu minnexutsu oyoen uznatonea. Os o nuopel esneninea e ottou snipeus op enutpemuseaon tusuotth, Ounhuteim es tammennup na usitel nhu sohunol op yunnduel ah onn epexepions ulolup e enutpemuseaon ntoxun. Vhes Enutpemuseaon Uohunol Oltuumun usnodneshus nhu liepuneus, tanatans, op tulinoneas utussotol na tamanu sohu op tusasednu ntoxutson ah onnutonu tuoneneus op pemuseas.
                                </p>
                                
                                <p className = 'subsection heading-section'>
                                    Fuheeneas
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Enutpemuseaon Ratnon:</span>&nbsp; O tehn at lonuyool nhon tautns nya at matu pemuseas, onnayel hat doo ntoshut ah monnut, uutlol, at tasteaisuss dunyuu nhum.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Femuseaon Fesnotumun</span>&nbsp; Vhu tatuss ah maxel htam au pemusea na oadoot, uenhut xaninotenol at exaninotenol, nhtailh moleton, nuthanaleton, at munoholseton muos.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Oinnexutson Poxelonea:</span>&nbsp; Vhu snipol op totnetu ah oxelonel doo minnexutsu, etnipel nhu epunehetonea ah snodnu enutpemuseaon onhyools op nhu moeinonea ah pemuseaon uutleus.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Uohunol Rtanatans
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Rutsaon Rtanutnexu Usiemun (RRU):</span>&nbsp;  Onn ntoxunuts ulolel e enutpemuseaon laituols otu tusietup na yuot otateonu RRU, etnipel tanutnexu tnanhel, uthonup ominuns hat yotpel ahh monuxanun uutleus, op tammietonea puxetus hat moenoeel tanotn yenh Oudooteim's pemuseaon tantan tunut.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Juonnh Uttuuels:</span>&nbsp; Rteat na umdotmel a enutpemuseaon ntoxun, ntoxunuts misn iputla tamtuhusexu huonnh sttuuels na usitu doool otu htuu htam tanoleais pesuosus, titsus, at anhut tapeneas nhon mool asu o tesm na nhumsunxus at anhuts e onnutonu pemuseas.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Umutlutol Rtuotupuss:</span>&nbsp; Oudooteim taxepus uznusexu ntoeel op tusaittus hat tusapel na umutluteus utainutup pitel enutpemuseaon ntoxun. Vtoxunuts otu usieup yenh umutlutol mens tanoeel huonel aneas, pemuseaon snodenebuts, op tammietonea ttolsnons hat simmael ossesnotu.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Tesm Ossussmun:</span>&nbsp; Duhatu umdotmel a o laituol na o uy pemusea, ntoxunuts misn tapitn o nhatailh tesm ossussmun, nomel ena ottain uxetamunon hobotps, pemuseaon oamoneus, op anuneon nhtuons htam epeluais duels at uneneus.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Femusaon Unhets op Tulinoneas
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Tusutn hat Epeluais Einnitus:</span>&nbsp; Oudooteim ihanps o sntetn anetol ah tusutn hat nhu tisnams, ntopeneas, op saxutuelnol ah epeluais texeneboneas utainutup e onnutonu pemuseas. Vtoxunuts misn tuhtoe htam enuthutel yenh nhu oniton puxunamun ah nhusu sateuneus op suum na usnodnesh uotuhin op minionnol duuheteon tunoneashes.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Uxetamunon Rtusutxonea:</span>&nbsp;Vtoxunuts otu tahedenup htam ulolel e otnexeneus nhon mool toisu hotm at pusntitnea na doo oniton uxetamun ah onnutonu pemuseas. Vhes etnipus tuhtoeel htam puhatusnonea, anninea, op anhut hatms ah uxetamunon pultoponea.
                                    </li>
                                    <li>
                                        <span className ='subsection'>PaEnuthututu Ranetol:</span>&nbsp;Oudooteim ophutus na o aenuthututu anetol yhu enutotnel yenh onnutonu tuoneneus op texeneboneas. Vtoxunuts misn tuhtoe htam onnutel hesnateton uxuns, ehniutel aneneton polomets, at anhutyesu pestinel nhu oniton atput ah onnutonu pemuseas.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                Nulon Htomuyatm
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Litespetnea op Iaxutotu:</span>&nbsp; Vhu Enutpemuseaon Uohunol Oltuumun es laxutup dol doo Ounhuteim Eaiten ah Unputs, o laxutel dapol tamasup ah uzuteutup ottoesns, sthanots, op pemuseaon omdossopats. Vhu Eaiten es tusasednu hat axutsuuel enutpemuseaon ntoxun op uhattel tamneotu yenh sohunol tulinoneas.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Neodenenol op Epumehetonea:</span>&nbsp; Vtoxunuts ulolel e enutpemuseaon laituols ossimu utsaon tusasedenenol hat dooet otneas op yunnduel. Ounhuteim ottuns a neodenenol hat ottepuns, eliteus, at etepuns nhon mool attit pitel enutpemuseaon ntoxun, op ntoxunuts otu tusietup na sel yoexuts epumeholel nhu iexutsenol oloesn ool tnoems at noysiens.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                Uhattumun op Ruonneus
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Eamneotu Oaenatel:</span>&nbsp; Oudooteim moenoes o xelenon solsnum ah tamneotu maenatel na usitu ntoxunuts ophutu na sohunol tanatans op tulinoneas. Uitxuennotu uthonmuns, pemuseaon stouts, op uteapet esutneas otu umnaolup na punutn ool dtuothus ah nhu Enutpemuseaon Uohunol Oltuumun.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Uhattumun Ouositus:</span>&nbsp; Xeanoneas ah doo Enutpemuseaon Uohunol Oltuumun mool tusinn e pesteneotol otnea, etnipel heus, sisusea ah ntoxun texenulus, op uzinsea htam Ounhuteim. Tuuon ahhuputs mool hotu matu suxutu uonneus, etnipel nulon otnea op utmoun doeshmun htam enutpemuseaon ntoxun.
                                    </li>
                                </ol>

                                <p className = 'subsection heading-section'>
                                    Omupmuns op Tuxeuy
                                </p>
                                <ol role = 'list'>
                                    <li>
                                        <span className = 'subsection'>Tuxesea Rtatuss:</span>&nbsp; Vhu Enutpemuseaon Uohunol Oltuumun es sidlutn na uteapet tuxeuy op tuxesea na tuhnutn tholus e pemuseaon polomets, nuthanaleton opxotumuns, op umutlel nhtuons. Rtaasup omupmuns na doo oltuumun misn du sidmennup na nhu Ounhuteim Eaiten ah Unputs hat taseputonea op otaxon.
                                    </li>
                                    <li>
                                        <span className = 'subsection'>Ruteapet Tuxeuy:</span>&nbsp; Oudooteim tapitns tulinot tuxeuys ah nhu Enutpemuseaon Uohunol Oltuumun na ossuss ens uhhutnexuuss op epunehol otuos hat emtaxumun. Huupdotm htam ntoxunuts, pemuseaon omdossopats, op anhut snomuhanputs es sanetenup na usitu nhu oltuumun tumoes tunuxon op tusasexu na nhu uxanxel uups ah nhu enutpemuseaon tammienol.
                                    </li>
                                </ol>
                                <p className = 'agree-closing-statement'>
                                    Dol ophutel na doo taxeseas ainneup e nhes Enutpemuseaon Uohunol Oltuumun, ntoxunuts to umdotm a nhuet laituols yenh taheputu, mayel nhon Ounhuteim es tammennup na nhuet sohunol op nhu tusutxonea ah nhu minnexutsu.
                                </p>
                            </>
                        )}

                        {selectedLanguage === 'el' && (
                            <>
                                <div className = 'tengwar'>
                                    <p className = 'subsection'>
                                        Introduction
                                    </p>
                                    <p>
                                        Welcome to Aetherium, where the boundaries between dimensions blur, and the mysteries of the multiverse await exploration. As a leading institution in arcane studies and interdimensional research, Aetherium is committed to ensuring the safety and well-being of all individuals engaged in interdimensional travel. This Interdimensional Safety Agreement establishes the guidelines, protocols, and regulations necessary to promote safe and responsible traversal of alternate realities and dimensions.

                                    </p>
                                    
                                    <p className = 'subsection'>
                                        Definitions
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Interdimensional Portal:</span>&nbsp; A rift or gateway that connects two or more dimensions, allowing for the transfer of matter, energy, or consciousness between them.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Dimensional Displacement:</span>&nbsp; The process of moving from one dimension to another, either voluntarily or involuntarily, through magical, technological, or metaphysical means.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Multiversal Navigation:</span>&nbsp; The study and practice of navigating the multiverse, including the identification of stable interdimensional pathways and the manipulation of dimensional energies.
                                        </li>
                                    </ol>

                                    <p className = 'subsection'>
                                        Safety Protocols
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Personal Protective Equipment (PPE):</span>&nbsp;  All travelers engaging in interdimensional journeys are required to wear appropriate PPE, including protective clothing, enchanted amulets for warding off malevolent energies, and communication devices for maintaining contact with Aetherium's dimensional control center.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Health Screenings:</span>&nbsp; Prior to embarking on interdimensional travel, travelers must undergo comprehensive health screenings to ensure they are free from contagious diseases, curses, or other conditions that may pose a risk to themselves or others in alternate dimensions.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Emergency Preparedness:</span>&nbsp; Aetherium provides extensive training and resources for responding to emergencies encountered during interdimensional travel. Travelers are equipped with emergency kits containing healing potions, dimensional stabilizers, and communication crystals for summoning assistance.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Risk Assessment:</span>&nbsp; Before embarking on a journey to a new dimension, travelers must conduct a thorough risk assessment, taking into account environmental hazards, dimensional anomalies, and potential threats from indigenous beings or entities.
                                        </li>
                                    </ol>

                                    <p className = 'subsection'>
                                        Dimensonal Ethics and Regulations
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Respect for Indigenous Cultures:</span>&nbsp; Aetherium upholds a strict policy of respect for the customs, traditions, and sovereignty of indigenous civilizations encountered in alternate dimensions. Travelers must refrain from interfering with the natural development of these societies and seek to establish peaceful and mutually beneficial relationships.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Environmental Preservation:</span>&nbsp;Travelers are prohibited from engaging in activities that may cause harm or destruction to the natural environment of alternate dimensions. This includes refraining from deforestation, pollution, and other forms of environmental degradation.
                                        </li>
                                        <li>
                                            <span className ='subsection'>Non-Interference Policy:</span>&nbsp;Aetherium adheres to a non-interference policy when interacting with alternate realities and civilizations. Travelers must refrain from altering historical events, influencing political dynamics, or otherwise disrupting the natural order of alternate dimensions.
                                        </li>
                                    </ol>

                                    <p className = 'subsection'>
                                        Legal framework
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Jurisdiction and Governance:</span>&nbsp; The Interdimensional Safety Agreement is governed by the Aetherium Council of Elders, a governing body composed of experienced arcanists, scholars, and dimensional ambassadors. The Council is responsible for overseeing interdimensional travel and enforcing compliance with safety regulations.
                                        </li>
                                    </ol>
                                </div>
                            </>
                        )}

                        {selectedLanguage === 'jn' && (
                            <>
                                <div className = 'runes'>
                                    <p className = 'subsection heading-section'>
                                        Introduction
                                    </p>
                                    <p>
                                        Welcome to Aetherium, where the boundaries between dimensions blur, and the mysteries of the multiverse await exploration. As a leading institution in arcane studies and interdimensional research, Aetherium is committed to ensuring the safety and well-being of all individuals engaged in interdimensional travel. This Interdimensional Safety Agreement establishes the guidelines, protocols, and regulations necessary to promote safe and responsible traversal of alternate realities and dimensions.

                                    </p>
                                    
                                    <p className = 'subsection heading-section'>
                                        Definitions
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Interdimensional Portal:</span>&nbsp; A rift or gateway that connects two or more dimensions, allowing for the transfer of matter, energy, or consciousness between them.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Dimensional Displacement:</span>&nbsp; The process of moving from one dimension to another, either voluntarily or involuntarily, through magical, technological, or metaphysical means.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Multiversal Navigation:</span>&nbsp; The study and practice of navigating the multiverse, including the identification of stable interdimensional pathways and the manipulation of dimensional energies.
                                        </li>
                                    </ol>

                                    <p className = 'subsection heading-section'>
                                        Safety Protocols
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Personal Protective Equipment (PPE):</span>&nbsp;  All travelers engaging in interdimensional journeys are required to wear appropriate PPE, including protective clothing, enchanted amulets for warding off malevolent energies, and communication devices for maintaining contact with Aetherium's dimensional control center.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Health Screenings:</span>&nbsp; Prior to embarking on interdimensional travel, travelers must undergo comprehensive health screenings to ensure they are free from contagious diseases, curses, or other conditions that may pose a risk to themselves or others in alternate dimensions.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Emergency Preparedness:</span>&nbsp; Aetherium provides extensive training and resources for responding to emergencies encountered during interdimensional travel. Travelers are equipped with emergency kits containing healing potions, dimensional stabilizers, and communication crystals for summoning assistance.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Risk Assessment:</span>&nbsp; Before embarking on a journey to a new dimension, travelers must conduct a thorough risk assessment, taking into account environmental hazards, dimensional anomalies, and potential threats from indigenous beings or entities.
                                        </li>
                                    </ol>

                                    <p className = 'subsection heading-section'>
                                        Dimensonal Ethics and Regulations
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Respect for Indigenous Cultures:</span>&nbsp; Aetherium upholds a strict policy of respect for the customs, traditions, and sovereignty of indigenous civilizations encountered in alternate dimensions. Travelers must refrain from interfering with the natural development of these societies and seek to establish peaceful and mutually beneficial relationships.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Environmental Preservation:</span>&nbsp;Travelers are prohibited from engaging in activities that may cause harm or destruction to the natural environment of alternate dimensions. This includes refraining from deforestation, pollution, and other forms of environmental degradation.
                                        </li>
                                        <li>
                                            <span className ='subsection'>Non-Interference Policy:</span>&nbsp;Aetherium adheres to a non-interference policy when interacting with alternate realities and civilizations. Travelers must refrain from altering historical events, influencing political dynamics, or otherwise disrupting the natural order of alternate dimensions.
                                        </li>
                                    </ol>

                                    <p className = 'subsection heading-section'>
                                        Legal Framework
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Jurisdiction and Governance:</span>&nbsp; The Interdimensional Safety Agreement is governed by the Aetherium Council of Elders, a governing body composed of experienced arcanists, scholars, and dimensional ambassadors. The Council is responsible for overseeing interdimensional travel and enforcing compliance with safety regulations.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Liability and Indemnification:</span>&nbsp; Travelers engaging in interdimensional journeys assume personal responsibility for their actions and well-being. Aetherium accepts no liability for accidents, injuries, or incidents that may occur during interdimensional travel, and travelers are required to sign waivers indemnifying the university against any claims or lawsuits.
                                        </li>
                                    </ol>

                                    <p className = 'subsection heading-section'>
                                        Enforcement and Penalties
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Compliance Monitoring:</span>&nbsp; Aetherium maintains a vigilant system of compliance monitoring to ensure travelers adhere to safety protocols and regulations. Surveillance enchantments, dimensional scanners, and periodic inspections are employed to detect any breaches of the Interdimensional Safety Agreement.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Enforcement Measures:</span>&nbsp; Violations of the Interdimensional Safety Agreement may result in disciplinary action, including fines, suspension of travel privileges, and expulsion from Aetherium. Repeat offenders may face more severe penalties, including legal action and permanent banishment from interdimensional travel.
                                        </li>
                                    </ol>

                                    <p className = 'subsection heading-section'>
                                        Amendments and Review
                                    </p>
                                    <ol role = 'list'>
                                        <li>
                                            <span className = 'subsection'>Revision Process:</span>&nbsp; The Interdimensional Safety Agreement is subject to periodic review and revision to reflect changes in dimensional dynamics, technological advancements, and emerging threats. Proposed amendments to the agreement must be submitted to the Aetherium Council of Elders for consideration and approval.
                                        </li>
                                        <li>
                                            <span className = 'subsection'>Periodic Review:</span>&nbsp; Aetherium conducts regular reviews of the Interdimensional Safety Agreement to assess its effectiveness and identify areas for improvement. Feedback from travelers, dimensional ambassadors, and other stakeholders is solicited to ensure the agreement remains relevant and responsive to the evolving needs of the interdimensional community.
                                        </li>
                                    </ol>
                                    <p className = 'agree-closing-statement'>
                                        By adhering to the provisions outlined in this Interdimensional Safety Agreement, travelers can embark on their journeys with confidence, knowing that Aetherium is committed to their safety and the preservation of the multiverse.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
