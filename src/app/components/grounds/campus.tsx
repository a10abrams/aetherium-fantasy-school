import Image from 'next/image';
import '../../styles/campus_video.css';

const CampusVid = () => {
    return (
        <video autoPlay muted loop playsInline width="100%" height="240">
          <source src="videos/Aeth_campus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    )
}

export default CampusVid;
