import './_group.css';

import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  ExternalLink,
  Heart,
  Image as ImageIcon,
  MapPin,
  Menu,
  Navigation,
  Sparkles,
  X,
} from 'lucide-react';

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

const galleryImages = [
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.49_PM_(1)_1788861931661.jpeg',
    alt: 'Our precious baby girl held lovingly by her parents',
    caption: 'Held in love',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.49_PM_1788861931661.jpeg',
    alt: 'Our little angel with her parents in a lavender dress',
    caption: 'A little lavender moment',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(3)_1788861931662.jpeg',
    alt: 'A collage of treasured baby portraits',
    caption: 'Little days, many dreams',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(2)_1788861931662.jpeg',
    alt: 'A collage of sweet newborn portraits',
    caption: 'Softly, she arrived',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(1)_1788861931662.jpeg',
    alt: 'Family portraits with our little angel',
    caption: 'Our growing little world',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.48_PM_1788861931662.jpeg',
    alt: 'Our little angel with her cousins',
    caption: 'Surrounded by family',
  },
  {
    src: '/__mockup/images/WhatsApp_Image_2026-09-08_at_3.33.47_PM_1788861931663.jpeg',
    alt: 'Our baby girl with her grandparents and family',
    caption: 'Blessings from every side',
  },
];

const ceremonyTime = new Date('2026-10-12T10:00:00+05:30').getTime();

function getCountdown(): Countdown | null {
  const difference = ceremonyTime - Date.now();
  if (difference <= 0) return null;
  const seconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

function App() {
  const [countdown, setCountdown] = useState<Countdown | null>(getCountdown);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeImage === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') setActiveImage((current) => current === null ? 0 : (current + 1) % galleryImages.length);
      if (event.key === 'ArrowLeft') setActiveImage((current) => current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  const jumpTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="page-shell">
      <div className="top-note">
        <Sparkles aria-hidden="true" />
        <span>A family gathering to remember · 12 October 2026</span>
        <Sparkles aria-hidden="true" />
      </div>

      <header className="site-nav">
        <a className="brand-mark" href="#home" aria-label="Return to the invitation home">
          <span className="seal"><Sparkles size={17} strokeWidth={1.5} aria-hidden="true" /></span>
          <span className="brand-copy">
            <strong>Our little angel</strong>
            <span>A naming ceremony</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#angel">Our Little Angel</a>
          <a href="#details">Ceremony Details</a>
          <a href="#location">Location</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#angel" onClick={() => setMenuOpen(false)}>Our Little Angel</a>
        <a href="#details" onClick={() => setMenuOpen(false)}>Ceremony Details</a>
        <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy reveal">
          <div className="eyebrow">With grateful hearts, we invite you</div>
          <h1>A day for <em>her</em> blessings.</h1>
          <p className="hero-intro">Our Little Princess is ready to be surrounded by the people whose love will guide her always.</p>
          <div className="hero-meta">
            <span><CalendarDays size={15} /> Monday · 12 October 2026</span>
            <span><Clock3 size={15} /> 10:00 AM IST</span>
          </div>
          <div className="hero-actions">
            <button className="button-primary" type="button" onClick={() => jumpTo('details')}>Read the invitation <ChevronDown size={15} /></button>
            <button className="button-quiet" type="button" onClick={() => jumpTo('gallery')}>See her album <ImageIcon size={15} /></button>
          </div>
        </div>
        <div className="hero-visual reveal" aria-label="A portrait of our precious baby girl with her parents">
          <div className="sun-disc" aria-hidden="true" />
          <div className="hero-photo">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} />
          </div>
          <div className="photo-caption">
            <span>The guest of honour</span>
            <strong>Our Precious<br />Baby Girl</strong>
          </div>
        </div>
      </section>

      <section className="section angel-section" id="angel">
        <div className="section-heading">
          <div className="eyebrow">A small note from her parents</div>
          <h2>She has made our world <em>softer.</em></h2>
        </div>
        <div className="story-grid">
          <div className="story-image">
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} loading="lazy" />
          </div>
          <div className="story-copy">
            <blockquote>Some joys arrive quietly, then fill every corner of a home.</blockquote>
            <p>We are overjoyed to share a beautiful milestone in our daughter’s life. Please join us as family, friends, and well-wishers gather to offer their blessings to Our Little Angel.</p>
            <div className="signature">With love, S Udhay Kiran &amp; J S Mounika</div>
          </div>
        </div>
      </section>

      <div className="ribbon" aria-label="Invitation highlights">
        <div className="ribbon-inner">
          <div className="ribbon-item"><Heart size={21} strokeWidth={1.5} /><span>Gathering for</span><strong>Our Little Angel</strong></div>
          <div className="ribbon-item"><Sparkles size={21} strokeWidth={1.5} /><span>A day of</span><strong>Love &amp; blessings</strong></div>
          <div className="ribbon-item"><MapPin size={21} strokeWidth={1.5} /><span>At the family home</span><strong>JMS House</strong></div>
        </div>
      </div>

      <section className="section details-section" id="details">
        <div className="section-heading">
          <div className="eyebrow">Keep this day close</div>
          <h2>The ceremony <em>details</em></h2>
          <p>A morning made for warm embraces, traditional blessings, and the people who make a family feel like home.</p>
        </div>
        <div className="details-layout">
          <div className="countdown-card">
            <div className="eyebrow">Counting every moment</div>
            {countdown ? (
              <>
                <h3>Until we gather<br />around her.</h3>
                <p>We cannot wait to see you there.</p>
                <div className="countdown-grid" aria-label="Countdown to the naming ceremony">
                  <div className="countdown-cell"><strong>{countdown.days}</strong><span>Days</span></div>
                  <div className="countdown-cell"><strong>{String(countdown.hours).padStart(2, '0')}</strong><span>Hours</span></div>
                  <div className="countdown-cell"><strong>{String(countdown.minutes).padStart(2, '0')}</strong><span>Minutes</span></div>
                  <div className="countdown-cell"><strong>{String(countdown.seconds).padStart(2, '0')}</strong><span>Seconds</span></div>
                </div>
              </>
            ) : (
              <div className="celebration-begun">The celebration has begun.<br />Our hearts are full.</div>
            )}
          </div>
          <div className="detail-list">
            <div className="detail-row">
              <div className="detail-icon"><CalendarDays size={20} /></div>
              <div><h3>Monday, 12 October 2026</h3><p>Please join us for the auspicious naming ceremony of Our Precious Baby Girl.</p><small>Save the date</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><Clock3 size={20} /></div>
              <div><h3>10:00 AM IST</h3><p>We will begin the ceremony in the morning, followed by time together over food and conversation.</p><small>The ceremony begins promptly</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><Heart size={20} /></div>
              <div><h3>Come with your blessings</h3><p>Your presence is the most treasured gift. Traditional attire and your warmest wishes are warmly welcomed.</p><small>From our family to yours</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section location-section" id="location">
        <div className="location-card">
          <div className="location-copy">
            <div className="eyebrow">Find your way to us</div>
            <h2>Come home<br /><em>to JMS House.</em></h2>
            <p>We would be honoured to welcome you into our home in Biradhanapalli for this intimate family celebration.</p>
            <div className="address"><MapPin size={18} /><span>JMS House, Biradhanapalli,<br />Kuppam, Chittoor District,<br />Andhra Pradesh - 517425</span></div>
            <a className="button-primary" href="https://maps.app.goo.gl/miwCBvuuLGWgXiDJ9" target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={15} /></a>
          </div>
          <div className="map-art" aria-label="Illustrated map showing JMS House">
            <div className="map-pin"><Navigation size={20} fill="currentColor" /></div>
            <div className="map-label">JMS House · Biradhanapalli</div>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="gallery-head">
          <div className="section-heading">
            <div className="eyebrow">A little album of love</div>
            <h2>Moments we want to <em>keep.</em></h2>
          </div>
          <p className="gallery-note">Seven glimpses of the little life that has made our family even bigger.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-tile" key={image.src}>
              <button type="button" onClick={() => setActiveImage(index)} aria-label={`Open photo: ${image.caption}`}>
                <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} />
              </button>
            </div>
          ))}
        </div>
        <div className="gallery-footer"><span>Tap any photograph to see it more closely</span></div>
      </section>

      <section className="section closing-section">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Your presence will make it complete</div>
        <h2>Come share the joy of <em>her beginning.</em></h2>
        <p>With folded hands and full hearts, we look forward to celebrating this precious day with you.</p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <button className="button-primary" type="button" onClick={() => jumpTo('location')}>Plan your visit <MapPin size={15} /></button>
        </div>
      </section>

      <footer className="footer">
        <span>With love, S Udhay Kiran &amp; J S Mounika</span>
        <span>A treasured family gathering · 12.10.2026</span>
      </footer>

      {activeImage !== null && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Enlarged family photograph" onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
          <div className="lightbox">
            <button className="lightbox-arrow" type="button" aria-label="Previous photograph" onClick={() => setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length)}><ArrowLeft size={20} /></button>
            <figure className="lightbox-figure">
              <img src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} />
              <figcaption>{galleryImages[activeImage].caption}</figcaption>
            </figure>
            <button className="lightbox-arrow" type="button" aria-label="Next photograph" onClick={() => setActiveImage((activeImage + 1) % galleryImages.length)}><ArrowRight size={20} /></button>
            <button className="lightbox-close" type="button" aria-label="Close enlarged photograph" onClick={() => setActiveImage(null)}><X size={19} /></button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;