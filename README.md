# Aetherium
Welcome to Aetherium! This project is a creative endeavor combining web design, copywriting, and TTRPGs (table-top role-playing games). This site serves to be the landing page for anyone interested in &#10024; *attending an arcane university.* &#10024;

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

### Overview
Aetherium, at its core, is a resource: for TTRPG players (or Game Masters), Aetherium serves as a treasure trove of characters, activities, lore, and inspiration; for those who wish to susped disbelief, Aetherium is, for all intents and purposes, Arcane *Harvard*.

### Key Features

- Interactive pages for different school departments (e.g., admissions, courses, faculty)
- A Nondiscrimination Policy and Interdimensional Safety Agreement translated into various fantasy languages (Elvish {Sindarin - Tengwar script}, Jotun, and Dwarvish).
- Deeply detailed characterization of professors and course listings.

### Technologies Used
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [GSAP](https://greensock.com/gsap/)

### Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

### Folder Structure
project-root/
│
public/                                
├─ videos                              
│  └─ Aeth_campus.mp4                  
├─ Aetherium_logo.png                  
├─ Aetherium_logo_white.png            
├─ Aetherium_logo_with_slog.png        
├─ Ellipse_1.jpg                       
├─ Ellipse_2.jpg                       
├─ Ellipse_3.png                       
├─ Ellipse_4.jpg                       
├─ Prof_signatures.png                 
├─ admissions_spotlight.png            
├─ aeth_beacon.png                     
├─ align_prof_signatures.png           
├─ contact_spotlight.png               
├─ corridor.png                        
├─ courtyard.png                       
├─ next.svg                            
├─ spotlight_caelum_skyseer.png        
├─ spotlight_celestial_1.png           
├─ spotlight_celestial_2.png           
├─ spotlight_celestial_3.png           
├─ spotlight_celestial_4.png           
├─ spotlight_celestial_5.png           
├─ spotlight_celestial_6.png           
├─ spotlight_celestial_7.png           
├─ spotlight_celestial_8.png           
├─ spotlight_elements_1.png            
├─ spotlight_elements_2.png            
├─ spotlight_elements_3.png            
├─ spotlight_garrick_ironfist.png      
├─ spotlight_ignis_flameheart.png      
├─ spotlight_isolde_moonshaper.png     
├─ spotlight_magic_1.jpg               
├─ spotlight_magic_2.png               
├─ spotlight_magic_3.jpg               
├─ spotlight_magnus_stoneheart.png     
├─ spotlight_seraphina_lifescribe.png  
├─ spotlight_weapons_tactics_1.jpg     
├─ spotlight_weapons_tactics_2.jpg     
├─ spotlight_weapons_tactics_3.jpg     
└─ vercel.svg                          
src                                          
├─ app                                       
│  ├─ about                                  
│  │  └─ page.tsx                            
│  ├─ apply                                  
│  │  ├─ none_type                           
│  │  │  └─ page.tsx                         
│  │  └─ page.tsx                            
│  ├─ beacon_guide                           
│  │  └─ page.tsx                            
│  ├─ contact                                
│  │  └─ page.tsx                            
│  ├─ dream_guide                            
│  │  └─ page.tsx                            
│  ├─ footer_docs                            
│  │  ├─ nondiscrim                          
│  │  │  └─ page.tsx                         
│  │  └─ safety_agree                        
│  │     └─ page.tsx                         
│  ├─ learn                                  
│  │  └─ page.tsx                            
│  ├─ summon_guide                           
│  │  └─ page.tsx                            
│  ├─ favicon.ico                            
│  ├─ globals.css                            
│  ├─ layout.tsx                             
│  └─ page.tsx                               
├─ components                                
│  ├─ buttons                                
│  │  └─ to_top                              
│  │     └─ index.tsx                        
│  ├─ grounds                                
│  │  └─ campus.tsx                          
│  ├─ home_sections                          
│  │  ├─ celestial                           
│  │  │  └─ index.tsx                        
│  │  ├─ elemental                           
│  │  │  └─ index.tsx                        
│  │  ├─ magic                               
│  │  │  └─ index.tsx                        
│  │  ├─ strategy                            
│  │  │  └─ index.tsx                        
│  │  └─ testimonials                        
│  │     └─ index.tsx                        
│  ├─ logo                                   
│  │  └─ logo.tsx                            
│  ├─ navigation                             
│  │  ├─ footer                              
│  │  │  └─ index.tsx                        
│  │  ├─ navbar                              
│  │  │  └─ index.tsx                        
│  │  └─ sidebar                             
│  │     └─ index.tsx                        
│  ├─ reveal                                 
│  │  ├─ dropdown.tsx                        
│  │  ├─ fullscreen_logo.tsx                 
│  │  └─ reveal.tsx                          
│  └─ testimonials_gallery                   
│     └─ gallery.tsx                         
└─ styles                                    
│  ├─ about                                  
│  │  └─ about_styles.css                    
│  ├─ apply                                  
│  │  ├─ apply_styles.css                    
│  │  ├─ methods_apply_styles.css            
│  │  └─ none_type_styles.css                
│  ├─ buttons                                
│  │  └─ buttons_styles.css                  
│  ├─ contact                                
│  │  └─ contact_styles.css                  
│  ├─ footer_links                           
│  │  ├─ nondiscrim_styles.css               
│  │  └─ safety_agree_styles.css             
│  ├─ home_sections                          
│  │  ├─ celestial                           
│  │  │  └─ celestial_section_styles.css     
│  │  ├─ elemental                           
│  │  │  └─ elemental_section_styles.css     
│  │  ├─ magic                               
│  │  │  └─ magic_section_styles.css         
│  │  ├─ strategy                            
│  │  │  └─ strategy_section_styles.css      
│  │  └─ testimonials                        
│  │     └─ testimonials_section_styles.css  
│  ├─ learn                                  
│  │  └─ learn_section_styles.css            
│  ├─ campus_video.css                       
│  ├─ footer_styles.css                      
│  ├─ nav_logo_styles.css                    
│  ├─ navbar_styles.css                      
│  └─ page.module.css                        
package.json
README.md

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
