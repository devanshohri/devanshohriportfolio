import Nav from '../../components/Nav';
import '../../styles/pages/archive.css';
import VideoPlayer from '../../components/video-component';
import Image from 'next/image'

import archimg001 from "@/images/archive-images/tff.webp"
import archimg002 from "@/images/archive-images/porsche.webp"
import archimg003 from "@/images/archive-images/poster01.webp"
import archimg004 from "@/images/archive-images/ekencards.webp"
import archimg005 from "@/images/archive-images/mcl.webp"
import archimg006 from "@/images/archive-images/walkman.webp"


export default function Archive() {
  return (
    <main>
      <div className="container">
        <Nav />
        <hr />
        <section className="archive main-grid">

          <div className="archive-container arch01">
            <VideoPlayer videoUrl="https://cdn.devanshohri.com/archive-videos/do-arch-01.mp4" thumbnail="" alt="User Flow" style={{borderRadius:'2.5vw'}}/>
            <p className='mono accent'>01</p>
            <p className="mono">User Flow Task</p>
          </div>

          <div className="archive-container arch02">
            <Image src={archimg001} alt="Poster" />
            <p className='mono accent'>02</p>
            <p className="mono">Poster</p>
          </div>

          <div className="archive-container arch03">
            <Image src={archimg002} alt="Poster" />
            <p className='mono accent'>03</p>
            <p className="mono">Poster</p>
          </div>

          <div className="archive-container arch04" >
            <VideoPlayer videoUrl="https://cdn.devanshohri.com/archive-videos/nike.mp4" thumbnail="" alt="3d spinning logo" />
            <p className='mono accent'>05</p>
            <p className="mono">3d logo</p>
          </div>

          <div className="archive-container arch05">
            <VideoPlayer videoUrl="https://cdn.devanshohri.com/archive-videos/designflows2025.mp4" thumbnail="" alt="designflows ux challenege" style={{borderRadius:'2.5vw'}}/>
            <p className='mono accent'>06</p>
            <p className="mono">Designflows 2025</p>
          </div>

          <div className="archive-container arch06">
            <Image src={archimg003} alt="Poster" />
            <p className='mono accent'>07</p>
            <p className="mono">Poster</p>
          </div>

          <div className="archive-container arch07">
            <VideoPlayer videoUrl="https://cdn.devanshohri.com/archive-videos/eken.mp4" thumbnail="" alt="Motion cards" />
            <p className='mono accent'>08</p>
            <p className="mono">Branding motion</p>
          </div>

          <div className="archive-container arch08">
            <Image src={archimg004} alt="Branding Card" />
            <p className='mono accent'>09</p>
            <p className="mono">Branding Card</p>
          </div>

          <div className="archive-container arch09">
            <Image src={archimg005} alt="3d Prism logo" />
            <p className='mono accent'>10</p>
            <p className="mono">3D Prism Logo</p>
          </div>

          <div className="archive-container arch010">
            <Image src={archimg006} alt="3d Product" />
            <p className='mono accent'>11</p>
            <p className="mono">3D Product</p>
          </div>
          
        </section>
      </div>
    </main>
  );
}
