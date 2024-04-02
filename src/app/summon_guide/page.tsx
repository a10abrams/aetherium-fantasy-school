'use client'

import Reveal from '../../components/reveal/reveal';
import AnimatedLogo from '../../components/reveal/fullscreen_logo';
import '../../styles/apply/methods_apply_styles.css';

export default function SummonApply () {
    return (
        <>
            <AnimatedLogo/>
            <main id = 'summon-beacon-page' className = 'lato'>
                <Reveal duration = '1s' x={0} y={20}>
                    <div className = 'page-apply-instructions'>
                        <p id = 'summon-opening-para'>
                            You stand at the threshold of destiny, having been touched by the mystical hand of fate through the conduit of Correspondence. The letter or scroll that found its way into your possession has ignited a flame of curiosity within you, beckoning you to delve deeper into the arcane mysteries that lie ahead. Now, as you seek to unlock the secrets hidden within its cryptic words, allow us to illuminate the path that awaits you.
                        </p>

                        <p>
                            Having perused the enigmatic missive that materialized before your eyes by means unknown to mortal comprehension, you now find yourself drawn to unravel the mysteries it holds. The parchment, once a conduit of secrets whispered by ancient tongues, now serves as a tangible link between you and the arcane wonders of Aetherium.
                        </p>

                        <p>
                            Contained within the folds of the letter are instructions, veiled in riddles and encoded with the wisdom of ages past. As you seek to decipher its hidden truths, know that each word is a thread woven into the tapestry of your destiny, guiding you along the path that leads to enlightenment and mastery of the arcane arts.
                        </p>

                        <p>
                            With the letter as your compass, you are poised to embark on a journey of self-discovery and transformation. Yet, as you stand on the threshold of the unknown, questions may linger in your mind, seeking answers that lie beyond the reach of mere mortal comprehension.
                        </p>

                        <p>
                            Fear not, for you are not alone on this path. As you navigate the arcane currents that lead to the hallowed halls of Aetherium, know that guidance is but a thought away. Trust in the wisdom that has guided you thus far, and the answers you seek shall reveal themselves in due time.
                        </p>

                        <p>
                            Prepare your mind, body, and spirit for the trials that lie ahead, for they are the crucible in which your destiny shall be forged. Embrace the challenges that await you, for they are the stepping stones that will lead you to the pinnacle of arcane mastery.
                        </p>

                        <p>
                            As you heed the call of the arcane and set forth on the quest outlined in your letter, remember that the journey itself is as important as the destination. Embrace the mysteries that unfold before you, for they are the keys that will unlock the secrets of your true potential.
                        </p>
                    </div>
                </Reveal>
            </main>
        </>
    )
}
