'use client'

import Reveal from '@/components/reveal/reveal';
import AnimatedLogo from '@/components/reveal/fullscreen_logo';
import '../../styles/apply/methods_apply_styles.css';

export default function DreamApply () {
    return (
        <> 
            <AnimatedLogo/>
            <main id = 'apply-dream-page' className = 'lato'>
                <Reveal duration = '1s' x={0} y={20}>
                    <div className = 'page-apply-instructions'>
                        <p id = 'dream-opening-para'>
                            WELCOME, wandering scholar, to the enchanted realm of Aetherium! Before stepping foot in these hallowed halls, <i>your</i> journey begins with a dream—a vision of destiny and purpose that will set you on the path to unlocking your true potential.
                        </p>

                        <p>
                            In this dream, you stood at the precipice of a majestic gateway, bathed in the soft luminescence of moonbeams. Stretching before you was a landscape veiled in mist, teeming with untold wonders and secrets waiting to be unraveled. A whispered voice, carried by the gentle breeze, beckoned you forth—an invitation to embark on a transformative quest.
                        </p>

                        <p>
                            With a heart full of anticipation and curiosity, you heed the call, and step forward into the unknown. As you traverse the superlunary landscape, guided by the light of the moon and the whispers of the wind, you feel a sense of purpose and destiny coursing through your veins.
                        </p>

                        <p>
                            Along the way, you encounter symbols and signs, each imbued with ancient magic and hidden meaning. These omens serve as guideposts on your journey, leading you ever closer to your ultimate destination—the heart of Aetherium, where your destiny awaits.
                        </p>

                        <p>
                            As the first light of dawn breaks upon the horizon, you awaken from your dream, the memory of your nocturnal adventure lingering like the fading echoes of a song. Yet, something tangible remains—a physical manifestation of the dream world brought into the waking realm.
                        </p>

                        <p>
                            Before you lies a magical artifact or symbol, a tangible reminder of the vision that has captured your imagination and stirred your soul. It is a key—a symbol of initiation and possibility, a beacon that beckons you to embrace the adventure that lies ahead.
                        </p>

                        <p>
                            With the artifact in hand, you embark on the next phase of your journey—the initiation of the quest that will lead you to the gates of Aetherium. Follow the clues, unravel the mysteries, and trust in the guidance of your intuition as you navigate the twists and turns of the path before you.
                        </p>
                        
                        <p>
                            As you journey onward, remember that the quest is not just about reaching your destination—it is about embracing the journey itself, and the lessons learned along the way. Each step brings you closer to unlocking the secrets of the universe and discovering the magic that lies within.
                        </p>

                        <p>
                            At Aetherium, we believe that true learning begins with exploration and discovery. Whether you receive a dream invitation, encounter a mystical artifact, or follow the call of your own inner voice, know that the path to enlightenment is as unique as you are.
                        </p>

                        <p>
                            Join us as we embark on this journey together, united in our quest for knowledge, wisdom, and the infinite possibilities of the magical realm. Welcome to Aetherium—where dreams become reality, and the adventure of a lifetime awaits.
                        </p>
                    </div>
                </Reveal>
            </main>
        </>
    )
}
