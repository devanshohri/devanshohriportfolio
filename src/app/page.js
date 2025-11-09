import '../styles/pages/home.css';
import VideoPlayer from '../components/video-component';
import Image from 'next/image';
import Nav from '@/components/Nav';

import mepomain1 from '@/images/mepo/main/mepo-main-1.webp';
import mepomain2 from '@/images/mepo/main/mepo-main-2.webp';
import mepomain3 from '@/images/mepo/main/mepo-main-3.webp';
import mepomain4 from '@/images/mepo/main/mepo-main-4.webp';

import kukkiva1 from '@/images/kukkiva/kukkiva-main-1.webp'
import kukkiva2 from '@/images/kukkiva/kukkiva-main-2.webp'
import kukkiva4 from '@/images/kukkiva/kukkiva-main-3.webp'
import kukkiva5 from '@/images/kukkiva/kukkiva-main-5.webp'


export default function Home() {
  return (
    <div className="container">
      <Nav />
      <div className="hero-footer">
        <div className="selected-work">
          <p className="work-number">(06)</p>
          <p>Selected Work ↓</p>
        </div>
        <div className="availability-cta">
          <a href="mailto:devanshohri@gmail.com" className="contact-button hua">Contact ↗</a>
          <p><span className="available"></span> &nbsp; Available Dec ’25</p>
        </div>
      </div>
      <hr />
      <section className="work">

        <a href="" className='work-container work-1 main-grid'>
          <div className="work-index">
            <p className="accent">01</p>
          </div>
          <div className="work-title">
            <h2>Meponet</h2>
            <p className="accent">UI/UX, Design System & Tokens, Web Development</p>
          </div>
          <Image
            src={mepomain1}
            className='mepo-main-1'
          />
          <Image
            src={mepomain2}
            className='mepo-main-2'
          />
          <Image
            src={mepomain3}
            className='mepo-main-3'
          />
          <Image
            src={mepomain4}
            className='mepo-main-4'
          />
        </a>

        <a href="" className='work-container work-2 main-grid'>
          <div className="work-index">
            <p className="accent">02</p>
          </div>
          <div className="work-title">
            <h2>Kukkiva taide</h2>
            <p className="accent">Logo, Brand Identity, Web Development</p>
          </div>
          <Image
            src={kukkiva1}
            className='kukkiva-main-1'
          />
          <Image
            src={kukkiva2}
            className='kukkiva-main-2'
          />
          <VideoPlayer 
            className='kukkiva-main-3' 
            videoUrl="https://cdn.devanshohri.com/kukkiva-main-4.mov" 
            thumbnail="./images/" 
            alt="User Flow"
          />
          <Image
            src={kukkiva4}
            className='kukkiva-main-4'
          />
          <Image
            src={kukkiva5}
            className='kukkiva-main-5'
          />
        </a>

        <a href="" className='work-container work-3 main-grid'>
          <div className="work-index">
            <p className="accent">03</p>
          </div>
          <div className="work-title">
            <h2>Pienet Koneet</h2>
            <p className="accent">Motion Design, Stop-Motion</p>
          </div>
          <div className="pienet-koneet-main">
            <VideoPlayer 
              videoUrl="https://cdn.devanshohri.com/pienet_koneet-_title%20(1080p).mp4" 
              thumbnail="./images/" 
              alt="User Flow"
            />
          </div>
        </a>

        <a href="" className='work-container work-4 main-grid'>
          <div className="work-index">
            <p className="accent">04</p>
          </div>
          <div className="work-title">
            <h2>Blumaan</h2>
            <p className="accent">Motion Graphics</p>
          </div>
          <div className="blumaan-main">
            <VideoPlayer 
              videoUrl="https://cdn.devanshohri.com/promo_-_blumaan%20(1080p).mp4" 
              thumbnail="./images/" 
              alt="User Flow"
            />
          </div>
        </a>

        <a href="" className='work-container work-5 main-grid'>
          <div className="work-index">
            <p className="accent">05</p>
          </div>
          <div className="work-title">
            <h2>Illvzn x OTB</h2>
            <p className="accent">Motion Graphics</p>
          </div>
          <div className="illvzn-main">
            <VideoPlayer 
              videoUrl="https://cdn.devanshohri.com/illvzn.mp4" 
              thumbnail="./images/" 
              alt="User Flow"
            />
          </div>
        </a>

      </section>
    </div>
  );
}
