'use client'

import Reveal from '../../components/reveal/reveal';
import AnimatedLogo from '../../components/reveal/fullscreen_logo';
import '../../styles/apply/methods_apply_styles.css';

export default function BeaconApply () {
    return (
        <>
            <AnimatedLogo/>
            <main id = 'apply-beacon-page' className = 'lato'>
            <Reveal duration = '1s' x={0} y={20}>
                    <div className = 'page-apply-instructions'>
                        <p id = 'beacon-opening-para'>
                            GREETINGS, intrepid seeker who has felt the stirring call of the Aetherium Beacon! You stand on the threshold of an extraordinary journey, guided by the mystical signal that has reached out to touch your soul. Now, as you seek to unravel the mysteries that lie ahead, let us illuminate the path that awaits you.
                        </p>

                        <p>
                            You have felt it, haven't you? That inexplicable pull, drawing you towards a destiny intertwined with the very essence of magic itself. You have heard the whisper of the Beacon, resonating deep within your being, urging you to embark on a quest of profound significance. Fear not, for you are not alone in this journey.
                        </p>

                        <p>
                            With the Beacon's call reverberating in your heart, you are already attuned to the ethereal energies that guide your path. Trust in your instincts, for they will lead you along the mystical trail that winds its way towards the beginning of your quest. Keep your senses keen and your spirit open, for the Beacon's light shall illuminate your way.
                        </p>

                        <p>
                            As you traverse the landscape guided by the Beacon's radiant glow, know that each step brings you closer to your destination. Embrace the challenges that lie ahead, for they are but tests of your resolve and trials of your character. Remember, it is not the destination alone that defines your journey, but the experiences you gather along the way.
                        </p>

                        <p>
                            With unwavering determination, you will eventually find yourself standing at the threshold where the quest begins. Here, amidst the ancient echoes of magic and mystery, you will discover the true extent of your potential. Take a moment to gather your courage, for the journey ahead promises adventure, discovery, and the fulfillment of destiny.
                        </p>

                        <p>
                            As you step forward into the unknown, know that you carry the Beacon's light within you, guiding your every move. Embrace the magic that surrounds you, for it is the very essence of Aetherium itself. With each challenge you overcome and each obstacle you face, you grow ever closer to unlocking the secrets of the arcane arts.
                        </p>

                        <p>
                            The path illuminated by the Aetherium Beacon is one of wonder, discovery, and transformation. As you heed its call and embark on this mystical journey, remember that you are not alone. The magic of Aetherium flows through you, empowering you to rise to the challenges that lie ahead and emerge victorious on your quest for knowledge and mastery.
                        </p>
                    </div>
            </Reveal>
            </main>
        </>
    )
}
