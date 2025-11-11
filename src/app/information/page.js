import '../../styles/pages/information.css';
import Image from 'next/image';
import devansh from '@/images/archive-images/dev.jpg'
import Nav from '../../components/Nav';

export default function Information() {
  return (
    <main>
      <div className="container">
        <Nav />
        <section className="information main-grid">

          <div className="info-hero-text">
            <h1>
              I’m Devansh, a multidisciplinary designer based in Finland focused on crafting visual experiences 
              that leave a lasting impression. I work across brand identity, UI/UX, and motion design — creating thoughtful, 
              memorable work that connects with people and resonates beyond first glance.
            </h1>
            <br />
            <h1>
             I believe good design transcends tools and mediums. Whether I'm coding, building in 3D, or behind a camera, 
             I focus on what will best bring an idea to life and create something memorable.
            </h1>
          </div>

          <div className="info-info">

            <hr className='info-info-hr' />

            <div className="info-contact">
              <p className="info-contact-title accent">Contact</p>
              <div className="info-text">
                <a className='hua ' href="mailto:devanshohri@gmail.com"> Email ↗</a>
                <a href="https://www.linkedin.com/in/devanshohri/" target='_blank' className="hua ">Linkedin ↗</a>
                <a href="https://www.instagram.com/devanshohri/" target='_blank' className="hua ">Instagram ↗</a>
              </div>
            </div>

            <hr className='info-info-hr' />

            <div className="info-docs">
              <p className="accent">Docs</p>
              <div className="info-text">
                <a className='hua' href="/resume/devansh_ohri_resume.pdf" target='_blank'> Resume.pdf ↗</a>
              </div>
            </div>

            <hr className='info-info-hr' />

            <div className="info-discipline">
              <p className="accent">Discipline</p>
              <div className="info-text">
                <p className=''>Digital Design</p>
                <p className=''>UI/UX Design</p>
                <p className=''>Visual Identity</p>
                <p className=''>Motion Design</p>
                <p className=''>Web Design</p>
                <p className=''>Web Development</p>
              </div>
            </div>

            <hr className='info-info-hr' />

            <div className="info-tools">
              <p className="accent">Tools</p>
              <div className="info-text">
                <p className=''>Figma</p>
                <p className=''>Adobe Suite</p>
                <p className=''>Blender 3D</p>
                <p className=''>Next.js</p>
                <p className=''>GSAP</p>
                <p className=''><span className="grey">and many more...</span></p>
              </div>
            </div>

            <hr className='info-info-hr' />

            <div className="info-education">
              <p className="accent">Education</p>
              <div className="info-text">
                <p className=''>BA Interactive Media from Tampere University of Applied Sciences</p>
              </div>
            </div>
          </div>

          <div className="info-image" data-cursor="*person in the image is not as serious as he appears">
            <Image
             src={devansh}
             alt="devansh ohri's very serious portrait"
           />           
          </div>
        </section>
      </div>
    </main>
  );
}
