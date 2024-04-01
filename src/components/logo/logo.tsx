import Image from 'next/image';
import Link from 'next/link';
import AetheriumLogo from '../../../public/Aetherium_logo.png'
import '../../styles/nav_logo_styles.css';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={AetheriumLogo} alt="Aetherium logo; an arcane circle with 'Aetherium' in the center" id = 'Aeth_logo'/>
    </Link>
  );
}

export default Logo;
