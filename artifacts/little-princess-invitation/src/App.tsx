import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  ExternalLink,
  Flower2,
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
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.49_PM_(1)_1788861931661.jpeg',
    alt: 'Our precious baby girl held lovingly by her parents',
    caption: 'Held in love',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.49_PM_1788861931661.jpeg',
    alt: 'Our little angel with her parents in a lavender dress',
    caption: 'A little lavender moment',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(3)_1788861931662.jpeg',
    alt: 'A collage of treasured baby portraits',
    caption: 'Little days, many dreams',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(2)_1788861931662.jpeg',
    alt: 'A collage of sweet newborn portraits',
    caption: 'Softly, she arrived',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.48_PM_(1)_1788861931662.jpeg',
    alt: 'Family portraits with our little angel',
    caption: 'Our growing little world',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.48_PM_1788861931662.jpeg',
    alt: 'Our little angel with her cousins',
    caption: 'Surrounded by family',
  },
  {
    src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.47_PM_1788861931663.jpeg',
    alt: 'Our baby girl with her grandparents and family',
    caption: 'Blessings from every side',
  },
];

const ceremonyFeatureImage = {
  src: '/gallery/WhatsApp_Image_2026-09-08_at_4.00.05_PM_1788863690427.jpeg',
  alt: 'Our precious baby girl surrounded by soft pink details',
};

const parentsNoteImage = {
  src: '/gallery/WhatsApp_Image_2026-09-08_at_3.33.49_PM_(1)_1788864230977.jpeg',
  alt: 'Our little family sharing a tender moment together',
};

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

function FloralMark({ className = '' }: { className?: string }) {
  return (
    <span className={`floral-mark ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
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
    <main className="premium-page">
      <style>{`
        :root {
          --premium-ink: #35252b;
          --premium-wine: #6f293b;
          --premium-rose: #a95568;
          --premium-cream: #f8f1e6;
          --premium-paper: #fbf7ef;
          --premium-blush: #ead7cd;
          --premium-gold: #b89054;
          --premium-line: rgba(111, 41, 59, .2);
          --premium-serif: 'Cormorant Garamond', Georgia, serif;
          --premium-display: 'Italiana', 'Cormorant Garamond', serif;
          --premium-sans: 'DM Sans', sans-serif;
        }
        .premium-page { min-height: 100dvh; overflow: clip; background: radial-gradient(circle at 91% 22%, rgba(238,181,190,.18), transparent 26rem), var(--premium-paper); color: var(--premium-ink); font-family: var(--premium-sans); }
        .premium-page::before { position: fixed; z-index: 30; inset: 0; pointer-events: none; opacity: .18; content: ''; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.15'/%3E%3C/svg%3E"); mix-blend-mode: multiply; }
        .premium-page *, .premium-page *::before, .premium-page *::after { box-sizing: border-box; }
        .premium-page a { color: inherit; text-decoration: none; }
        .premium-page button { font: inherit; cursor: pointer; }
        .premium-topline { display: flex; min-height: 33px; align-items: center; justify-content: center; gap: 12px; padding: 7px 20px; background: var(--premium-wine); color: #f8e9d0; font-size: 9px; font-weight: 700; letter-spacing: .25em; text-align: center; text-transform: uppercase; }
        .premium-topline svg { color: var(--premium-gold); }
        .premium-nav { position: sticky; z-index: 20; top: 0; display: flex; min-height: 82px; align-items: center; justify-content: space-between; padding: 15px clamp(20px, 6vw, 88px); border-bottom: 1px solid rgba(111,41,59,.15); background: rgba(251,247,239,.88); backdrop-filter: blur(18px); }
        .premium-brand { display: flex; align-items: center; gap: 12px; }
        .premium-seal { display: grid; width: 43px; height: 43px; place-items: center; border: 1px solid var(--premium-gold); border-radius: 50%; color: var(--premium-wine); }
        .premium-seal svg { width: 20px; }
        .premium-brand-copy { display: grid; gap: 2px; line-height: 1; }
        .premium-brand-copy strong { color: var(--premium-wine); font-family: var(--premium-display); font-size: 24px; font-weight: 400; }
        .premium-brand-copy span { color: var(--premium-rose); font-size: 8px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
        .premium-links { display: flex; align-items: center; gap: clamp(15px, 2.6vw, 35px); }
        .premium-links a { position: relative; color: #684953; font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .premium-links a::after { position: absolute; right: 0; bottom: -9px; left: 0; height: 1px; background: var(--premium-gold); content: ''; transform: scaleX(0); transform-origin: right; transition: transform .45s cubic-bezier(.2,.7,.2,1); }
        .premium-links a:hover::after, .premium-links a:focus-visible::after { transform: scaleX(1); transform-origin: left; }
        .premium-menu-button { display: none; width: 42px; height: 42px; align-items: center; justify-content: center; border: 1px solid #cda987; border-radius: 50%; background: transparent; color: var(--premium-wine); }
        .premium-mobile-menu { display: none; position: fixed; z-index: 19; inset: 115px 15px auto; padding: 16px; border: 1px solid #dec8b3; background: rgba(251,247,239,.98); box-shadow: 0 24px 60px rgba(83,39,48,.18); }
        .premium-mobile-menu.open { display: grid; gap: 4px; animation: premium-drop .35s both; }
        .premium-mobile-menu a { padding: 13px 9px; border-bottom: 1px solid #ead9cb; color: #684953; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .premium-hero { position: relative; display: flex; max-width: 1180px; min-height: calc(100svh - 115px); margin: 0 auto; padding: clamp(62px, 8vw, 112px) clamp(24px, 7vw, 108px) clamp(90px, 10vw, 140px); align-items: center; justify-content: center; text-align: center; }
        .premium-hero::before { position: absolute; top: 12%; left: 50%; width: 300px; height: 300px; border: 1px solid rgba(184,144,84,.34); border-radius: 50%; content: ''; transform: translateX(-50%); }
        .premium-hero::after { position: absolute; right: 10%; bottom: 7%; width: 95px; height: 95px; border: 1px solid rgba(184,144,84,.35); border-radius: 50%; content: ''; }
        .premium-hero-copy { position: relative; z-index: 1; display: flex; width: 100%; max-width: 1040px; flex-direction: column; align-items: center; margin: 0 auto; }
        .premium-kicker { display: flex; align-items: center; gap: 11px; color: var(--premium-rose); font-size: 10px; font-weight: 700; letter-spacing: .27em; text-transform: uppercase; }
        .premium-kicker::before { width: 41px; height: 1px; background: var(--premium-gold); content: ''; }
        .premium-hero-intro { max-width: 620px; margin: 0 auto; color: #765e62; font-family: var(--premium-serif); font-size: clamp(20px, 2.2vw, 27px); line-height: 1.3; }
        .premium-hero h1 { max-width: 920px; margin: 8px auto 23px; color: var(--premium-wine); font-family: var(--premium-display); font-size: clamp(58px, 8vw, 116px); font-weight: 400; letter-spacing: -.055em; line-height: .84; text-align: center; text-wrap: balance; }
        .premium-hero h1 em { display: block; margin-left: 0; color: var(--premium-gold); font-family: var(--premium-serif); font-size: .7em; font-weight: 500; letter-spacing: -.045em; }
        .premium-lead { max-width: 600px; margin: 0 auto; color: #725962; font-family: var(--premium-serif); font-size: clamp(20px, 2vw, 27px); line-height: 1.2; }
        .premium-meta { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 25px; margin-top: 32px; color: #7d5960; font-size: 10px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
        .premium-meta span { display: inline-flex; align-items: center; gap: 8px; }
        .premium-meta svg { color: var(--premium-gold); }
        .premium-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 37px; }
        .premium-button, .premium-ghost { display: inline-flex; min-height: 49px; align-items: center; justify-content: center; gap: 9px; padding: 0 22px; border-radius: 999px; font-size: 10px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; transition: transform .45s cubic-bezier(.2,.7,.2,1), background-color .35s ease, border-color .35s ease, color .35s ease; }
        .premium-button { border: 1px solid var(--premium-wine); background: var(--premium-wine); color: #fdf6eb; box-shadow: 0 11px 23px rgba(111,41,59,.17); }
        .premium-button:hover { background: #531c2d; transform: translateY(-3px); }
        .premium-ghost { border: 1px solid #d7b997; background: transparent; color: var(--premium-wine); }
        .premium-ghost:hover { border-color: var(--premium-wine); background: #f2e3d7; transform: translateY(-3px); }
        .premium-hero-art { position: relative; width: min(100%, 690px); min-height: 425px; margin: 24px auto 6px; }
        .premium-hero-art::before { position: absolute; top: 8%; right: 1%; width: 94%; height: 370px; border: 1px solid rgba(184,144,84,.64); border-radius: 28px 28px 112px 28px; content: ''; transform: rotate(5deg); }
        .premium-photo-frame { position: absolute; top: 0; right: 5%; width: 90%; aspect-ratio: 1.55; height: auto; overflow: hidden; border: 10px solid #fffaf1; border-radius: 28px 28px 116px 28px; box-shadow: 18px 22px 0 rgba(216,177,131,.35), 0 26px 70px rgba(80,35,47,.18); transform: rotate(-2deg); }
        .premium-photo-frame img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
        .premium-photo-frame:hover img { transform: scale(1.035); }
        .premium-photo-label { position: absolute; right: 0; bottom: 2%; display: grid; gap: 5px; width: 183px; padding: 18px; border: 1px solid var(--premium-gold); background: #f3e2d1; color: var(--premium-wine); box-shadow: 0 15px 35px rgba(74,37,44,.11); transform: rotate(3deg); }
        .premium-photo-label span { font-size: 8px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
        .premium-photo-label strong { font-family: var(--premium-serif); font-size: 26px; font-weight: 600; line-height: .9; }
        .floral-mark { position: absolute; z-index: 2; display: block; width: 80px; height: 80px; color: var(--premium-gold); }
        .floral-mark i, .floral-mark b { position: absolute; display: block; border: 1px solid currentColor; border-radius: 100% 0 100% 0; content: ''; }
        .floral-mark i { width: 28px; height: 39px; }
        .floral-mark i:nth-child(1) { top: 0; left: 25px; transform: rotate(0deg); }
        .floral-mark i:nth-child(2) { top: 17px; right: 4px; transform: rotate(70deg); }
        .floral-mark i:nth-child(3) { bottom: 2px; right: 21px; transform: rotate(145deg); }
        .floral-mark i:nth-child(4) { bottom: 19px; left: 3px; transform: rotate(215deg); }
        .floral-mark b { top: 31px; left: 31px; width: 16px; height: 16px; border-radius: 50%; background: currentColor; }
        .premium-hero-flower { top: 2%; left: 3%; transform: rotate(-16deg); }
        .premium-section { max-width: 1300px; margin: 0 auto; padding: clamp(105px, 13vw, 190px) clamp(24px, 6.5vw, 82px); }
        .premium-section-heading { max-width: 680px; margin-bottom: 50px; }
        .premium-section-heading h2 { margin: 16px 0 0; color: var(--premium-wine); font-family: var(--premium-display); font-size: clamp(47px, 6.8vw, 86px); font-weight: 400; letter-spacing: -.06em; line-height: .8; }
        .premium-section-heading h2 em { color: var(--premium-rose); font-family: var(--premium-serif); font-size: .76em; }
        .premium-section-heading p { max-width: 545px; margin: 23px 0 0; color: #765e62; font-family: var(--premium-serif); font-size: 21px; line-height: 1.3; }
        .premium-story { position: relative; }
        .premium-story::after { position: absolute; top: 4%; right: 3%; width: 1px; height: 100px; background: var(--premium-gold); content: ''; }
        .premium-story-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: clamp(38px, 8vw, 126px); align-items: center; }
        .premium-story-photo { position: relative; padding: 0 0 26px 26px; }
        .premium-story-photo::before { position: absolute; inset: 28px 26px 0 0; border: 1px solid var(--premium-gold); content: ''; }
        .premium-story-photo img { position: relative; display: block; width: 100%; height: auto; border-radius: 28px 150px 22px 22px; background: #f0ddd7; object-fit: contain; }
        .premium-story-copy blockquote { margin: 0; color: var(--premium-wine); font-family: var(--premium-serif); font-size: clamp(32px, 3.7vw, 55px); line-height: .99; }
        .premium-story-copy blockquote::before { display: block; margin-bottom: 8px; color: var(--premium-gold); content: '“'; font-family: var(--premium-display); font-size: 79px; line-height: .35; }
        .premium-story-copy p { max-width: 530px; margin: 28px 0 0; color: #795f63; line-height: 1.85; }
        .premium-signature { display: flex; align-items: center; gap: 13px; margin-top: 30px; color: var(--premium-rose); font-family: var(--premium-serif); font-size: 24px; }
        .premium-signature::before { width: 42px; height: 1px; background: var(--premium-gold); content: ''; }
        .premium-ribbon { padding: 0 clamp(24px, 6vw, 82px); }
        .premium-ribbon-inner { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); max-width: 1120px; margin: 0 auto; padding: 38px 40px; border: 1px solid rgba(184,144,84,.7); background: #f1e3d6; }
        .premium-ribbon-inner::before, .premium-ribbon-inner::after { position: absolute; width: 8px; height: 8px; border: 1px solid var(--premium-gold); background: var(--premium-paper); content: ''; transform: rotate(45deg); }
        .premium-ribbon-inner::before { top: -5px; left: -5px; }
        .premium-ribbon-inner::after { right: -5px; bottom: -5px; }
        .premium-ribbon-item { display: grid; justify-items: center; gap: 7px; padding: 0 22px; text-align: center; }
        .premium-ribbon-item + .premium-ribbon-item { border-left: 1px solid rgba(111,41,59,.2); }
        .premium-ribbon-item svg { color: var(--premium-gold); }
        .premium-ribbon-item span { color: #886b6b; font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
        .premium-ribbon-item strong { color: var(--premium-wine); font-family: var(--premium-serif); font-size: 29px; font-weight: 600; line-height: 1; }
        .premium-details { max-width: 1420px; }
        .premium-details-layout { display: grid; grid-template-columns: .83fr 1.17fr; gap: clamp(36px, 6vw, 78px); align-items: start; }
        .premium-countdown { position: sticky; top: 111px; padding: 38px 34px; background: var(--premium-wine); color: #fbf2e4; box-shadow: 13px 14px 0 #d7b183; }
        .premium-countdown .premium-kicker { color: #eed3a7; }
        .premium-countdown h3 { margin: 25px 0 9px; font-family: var(--premium-serif); font-size: 43px; font-weight: 500; line-height: .88; }
        .premium-countdown p { margin: 0; color: #ebd9d1; font-size: 12px; }
        .premium-countdown-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 31px; }
        .premium-countdown-cell { padding: 14px 3px 11px; border: 1px solid rgba(251,242,228,.25); text-align: center; }
        .premium-countdown-cell strong { display: block; color: #f3d2a0; font-family: var(--premium-serif); font-size: 35px; font-weight: 600; line-height: 1; }
        .premium-countdown-cell span { color: #e6c9bd; font-size: 8px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .premium-begun { margin-top: 30px; color: #f3d2a0; font-family: var(--premium-serif); font-size: 30px; line-height: .95; }
        .premium-detail-list { border-top: 1px solid #dccbc0; }
        .premium-detail-row { display: grid; grid-template-columns: 55px 1fr; gap: 21px; padding: 29px 0; border-bottom: 1px solid #dccbc0; }
        .premium-detail-icon { display: grid; width: 45px; height: 45px; place-items: center; border: 1px solid #c69c70; border-radius: 50%; color: var(--premium-rose); }
        .premium-detail-row h3 { margin: 0 0 6px; color: var(--premium-wine); font-family: var(--premium-serif); font-size: 29px; font-weight: 600; line-height: 1; }
        .premium-detail-row p { margin: 0; color: #795f63; line-height: 1.6; }
        .premium-detail-row small { display: block; margin-top: 8px; color: var(--premium-rose); font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .premium-location { max-width: 1420px; }
        .premium-location-card { display: grid; grid-template-columns: 1fr 1.15fr; overflow: hidden; border: 1px solid #dec8b4; background: #f2e3d5; }
        .premium-location-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(31px, 5vw, 78px); }
        .premium-location-copy h2 { margin: 17px 0; color: var(--premium-wine); font-family: var(--premium-display); font-size: clamp(49px, 5.5vw, 76px); font-weight: 400; letter-spacing: -.06em; line-height: .8; }
        .premium-location-copy h2 em { font-family: var(--premium-serif); font-size: .76em; }
        .premium-location-copy p { max-width: 420px; margin: 0; color: #765d60; line-height: 1.75; }
        .premium-address { display: flex; gap: 11px; margin-top: 25px; color: #65454e; font-size: 13px; font-weight: 700; line-height: 1.6; }
        .premium-address svg { flex: 0 0 auto; color: var(--premium-gold); }
        .premium-location-copy .premium-button { align-self: flex-start; margin-top: 27px; }
        .premium-map { position: relative; min-height: 440px; overflow: hidden; background-color: #d7c5b1; background-image: linear-gradient(25deg, transparent 44%, rgba(105,130,111,.42) 45%, rgba(105,130,111,.42) 46%, transparent 47%), linear-gradient(112deg, transparent 26%, rgba(243,225,191,.78) 26%, rgba(243,225,191,.78) 28%, transparent 28%), linear-gradient(158deg, transparent 54%, rgba(181,122,112,.3) 54%, rgba(181,122,112,.3) 55%, transparent 55%); }
        .premium-map::before, .premium-map::after { position: absolute; border: 1px solid rgba(105,80,65,.2); border-radius: 50%; content: ''; }
        .premium-map::before { top: 24%; left: 31%; width: 230px; height: 230px; }
        .premium-map::after { top: 29%; left: 36%; width: 155px; height: 155px; border-color: rgba(111,41,59,.28); }
        .premium-map-pin { position: absolute; top: 39%; left: 50%; display: grid; width: 54px; height: 54px; place-items: center; border: 8px solid rgba(251,247,239,.78); border-radius: 50%; background: var(--premium-wine); color: #fff6e7; box-shadow: 0 10px 20px rgba(79,36,43,.25); transform: translate(-50%,-50%); }
        .premium-map-label { position: absolute; top: 57%; left: 50%; padding: 10px 13px; background: #fbf0df; color: var(--premium-wine); font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; transform: translateX(-50%); }
        .premium-gallery { max-width: 1420px; }
        .premium-gallery-head { display: flex; align-items: end; justify-content: space-between; gap: 30px; }
        .premium-gallery-head .premium-section-heading { margin-bottom: 0; }
        .premium-gallery-note { max-width: 270px; color: #876d6d; font-family: var(--premium-serif); font-size: 20px; line-height: 1.17; text-align: right; }
        .premium-gallery-grid { display: grid; grid-template-columns: 1.2fr .8fr .95fr 1fr; grid-template-rows: 250px 250px; gap: 15px; margin-top: 53px; }
        .premium-gallery-tile { position: relative; min-height: 220px; overflow: hidden; border: 6px solid #fff9ef; border-radius: 17px; background: #ddc4b4; box-shadow: 0 10px 24px rgba(93,49,57,.08); }
        .premium-gallery-tile:nth-child(1) { grid-row: span 2; }
        .premium-gallery-tile:nth-child(4) { grid-column: span 2; }
        .premium-gallery-tile button { display: block; width: 100%; height: 100%; padding: 0; border: 0; background: transparent; }
        .premium-gallery-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s cubic-bezier(.2,.7,.2,1), filter .8s ease; }
        .premium-gallery-tile:hover img, .premium-gallery-tile:focus-within img { filter: saturate(1.08); transform: scale(1.055); }
        .premium-gallery-tile::after { position: absolute; right: 14px; bottom: 14px; width: 31px; height: 31px; border: 1px solid rgba(255,249,241,.7); border-radius: 50%; background: rgba(68,30,43,.5); color: #fff9ef; content: '+'; font-family: var(--premium-serif); font-size: 22px; line-height: 28px; text-align: center; pointer-events: none; opacity: 0; transition: opacity .35s ease; }
        .premium-gallery-tile:hover::after, .premium-gallery-tile:focus-within::after { opacity: 1; }
        .premium-gallery-footer { display: flex; justify-content: center; margin-top: 31px; color: #8b6b6d; font-family: var(--premium-serif); font-size: 19px; }
        .premium-closing { position: relative; padding-top: 112px; padding-bottom: 140px; text-align: center; }
        .premium-closing::before { position: absolute; top: 0; left: 50%; width: 1px; height: 78px; background: var(--premium-gold); content: ''; }
        .premium-closing h2 { max-width: 790px; margin: 24px auto 17px; color: var(--premium-wine); font-family: var(--premium-display); font-size: clamp(50px, 7.4vw, 102px); font-weight: 400; letter-spacing: -.06em; line-height: .8; }
        .premium-closing h2 em { color: var(--premium-rose); font-family: var(--premium-serif); font-size: .78em; }
        .premium-closing p { max-width: 510px; margin: 0 auto; color: #775e61; font-family: var(--premium-serif); font-size: 23px; line-height: 1.2; }
        .premium-closing .premium-actions { justify-content: center; }
        .premium-footer { display: flex; justify-content: space-between; gap: 25px; padding: 25px clamp(24px, 7vw, 108px); border-top: 1px solid #e0cfc2; color: #967577; font-size: 9px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .premium-lightbox-backdrop { position: fixed; z-index: 50; inset: 0; display: grid; place-items: center; padding: 20px; background: rgba(44,20,30,.92); animation: premium-fade .3s ease both; }
        .premium-lightbox { position: relative; display: grid; grid-template-columns: auto minmax(0, 860px) auto; width: min(100%, 1120px); align-items: center; gap: 18px; }
        .premium-lightbox-figure { margin: 0; text-align: center; }
        .premium-lightbox-figure img { display: block; width: auto; max-width: min(78vw, 860px); height: min(80vh, 760px); margin: 0 auto; border: 7px solid #fbf0e2; border-radius: 14px; background: #e8d5c2; object-fit: contain; }
        .premium-lightbox-figure figcaption { margin-top: 13px; color: #f0dbcb; font-family: var(--premium-serif); font-size: 21px; }
        .premium-lightbox-close, .premium-lightbox-arrow { display: grid; place-items: center; border: 1px solid rgba(255,245,232,.48); border-radius: 50%; background: rgba(255,245,232,.1); color: #fff5e9; transition: transform .35s ease, background-color .35s ease; }
        .premium-lightbox-close { position: absolute; top: -13px; right: -6px; width: 39px; height: 39px; }
        .premium-lightbox-arrow { width: 49px; height: 49px; }
        .premium-lightbox-close:hover, .premium-lightbox-arrow:hover { background: rgba(255,245,232,.23); transform: scale(1.06); }
        .premium-reveal { animation: premium-rise .85s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes premium-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes premium-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes premium-drop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) {
          .premium-links { display: none; }
          .premium-menu-button { display: inline-flex; }
          .premium-hero { min-height: auto; padding-top: 78px; }
          .premium-hero-art { width: 100%; max-width: 650px; min-height: 425px; margin: 24px auto 6px; }
          .premium-details-layout { grid-template-columns: 1fr; }
          .premium-countdown { position: static; }
          .premium-location-card { grid-template-columns: 1fr; }
          .premium-map { min-height: 350px; }
        }
        @media (max-width: 680px) {
          .premium-topline { font-size: 8px; letter-spacing: .15em; }
          .premium-nav { min-height: 70px; padding: 12px 18px; }
          .premium-seal { width: 35px; height: 35px; }
          .premium-brand-copy strong { font-size: 20px; }
          .premium-brand-copy span { font-size: 7px; }
          .premium-mobile-menu { inset: 101px 14px auto; }
          .premium-hero { padding: 58px 21px 82px; }
          .premium-hero-intro { max-width: 335px; font-size: 19px; }
          .premium-hero h1 { margin-top: 5px; font-size: clamp(43px, 13vw, 68px); line-height: .86; }
          .premium-lead { font-size: 21px; }
          .premium-hero-art { min-height: 285px; margin: 22px auto 8px; }
          .premium-hero-art::before { top: 8%; right: -2%; width: 96%; height: 228px; border-radius: 22px 22px 72px 22px; }
          .premium-photo-frame { right: 4%; width: 92%; aspect-ratio: 1.42; height: auto; border-radius: 22px 22px 78px 22px; }
          .premium-photo-label { width: 150px; padding: 14px; }
          .premium-photo-label strong { font-size: 23px; }
          .premium-hero-flower { left: -8%; width: 64px; height: 64px; }
          .premium-section { padding: 100px 21px; }
          .premium-story-grid { grid-template-columns: 1fr; gap: 46px; }
          .premium-story-photo { max-width: 410px; margin: 0 auto; }
          .premium-ribbon { padding: 0 21px; }
          .premium-ribbon-inner { grid-template-columns: 1fr; gap: 23px; padding: 29px 15px; }
          .premium-ribbon-item + .premium-ribbon-item { padding-top: 23px; border-top: 1px solid rgba(111,41,59,.2); border-left: 0; }
          .premium-ribbon-item strong { font-size: 26px; }
          .premium-countdown { padding: 28px 21px; }
          .premium-countdown h3 { font-size: 37px; }
          .premium-countdown-cell strong { font-size: 29px; }
          .premium-detail-row { grid-template-columns: 43px 1fr; gap: 13px; padding: 23px 0; }
          .premium-detail-icon { width: 40px; height: 40px; }
          .premium-detail-row h3 { font-size: 26px; }
          .premium-gallery-head { display: block; }
          .premium-gallery-note { margin-top: 22px; text-align: left; }
          .premium-gallery-grid { display: flex; overflow-x: auto; gap: 12px; margin-right: -21px; padding-right: 21px; padding-bottom: 10px; scroll-snap-type: x mandatory; }
          .premium-gallery-tile, .premium-gallery-tile:nth-child(1), .premium-gallery-tile:nth-child(4) { flex: 0 0 77vw; height: 420px; min-height: 420px; scroll-snap-align: start; }
          .premium-gallery-tile:nth-child(2n) { height: 320px; min-height: 320px; margin-top: 50px; }
          .premium-footer { display: grid; gap: 7px; padding: 26px 21px; font-size: 8px; }
          .premium-lightbox { grid-template-columns: 40px minmax(0,1fr) 40px; gap: 7px; }
          .premium-lightbox-figure img { width: 100%; height: auto; max-width: 100%; max-height: 72vh; }
          .premium-lightbox-arrow { width: 38px; height: 38px; }
          .premium-lightbox-close { top: -48px; right: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .premium-page *, .premium-page *::before, .premium-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <div className="premium-topline">
        <Flower2 size={13} aria-hidden="true" />
        <span>A cherished family gathering · 12 October 2026</span>
        <Flower2 size={13} aria-hidden="true" />
      </div>

      <header className="premium-nav">
        <a className="premium-brand" href="#premium-home" aria-label="Return to the invitation home">
          <span className="premium-seal"><Sparkles aria-hidden="true" /></span>
          <span className="premium-brand-copy">
            <strong>A cherished beginning</strong>
            <span>Baby girl naming ceremony</span>
          </span>
        </a>
        <nav className="premium-links" aria-label="Main navigation">
          <a href="#premium-home">Home</a>
          <a href="#premium-story">Her story</a>
          <a href="#premium-details">The ceremony</a>
          <a href="#premium-location">JMS House</a>
          <a href="#premium-gallery">Album</a>
        </nav>
        <button className="premium-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
      <nav className={`premium-mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <a href="#premium-home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#premium-story" onClick={() => setMenuOpen(false)}>Her story</a>
        <a href="#premium-details" onClick={() => setMenuOpen(false)}>The ceremony</a>
        <a href="#premium-location" onClick={() => setMenuOpen(false)}>JMS House</a>
        <a href="#premium-gallery" onClick={() => setMenuOpen(false)}>Album</a>
      </nav>

      <section className="premium-hero" id="premium-home">
        <div className="premium-hero-copy premium-reveal">
          <p className="premium-hero-intro">With hearts full of love and happiness, we invite you to celebrate a very special moment.</p>
          <div className="premium-hero-art" aria-label="A portrait of our precious baby girl surrounded by pink details">
            <FloralMark className="premium-hero-flower" />
            <div className="premium-photo-frame">
              <img src={ceremonyFeatureImage.src} alt={ceremonyFeatureImage.alt} />
            </div>
            <div className="premium-photo-label">
              <span>The guest of honour</span>
              <strong>Our precious<br />baby girl</strong>
            </div>
          </div>
          <h1>Our Little Princess's<br /><em>Naming Ceremony</em></h1>
          <p className="premium-lead">Our beloved girl is ready to be surrounded by the people whose love will guide her, steady her, and celebrate every chapter ahead.</p>
          <div className="premium-meta">
            <span><CalendarDays size={15} /> Monday · 12 October 2026</span>
            <span><Clock3 size={15} /> 10:00 AM IST</span>
          </div>
          <div className="premium-actions">
            <button className="premium-button" type="button" onClick={() => jumpTo('premium-details')}>Read the invitation <ChevronDown size={15} /></button>
            <button className="premium-ghost" type="button" onClick={() => jumpTo('premium-gallery')}>Enter her album <ImageIcon size={15} /></button>
          </div>
        </div>
      </section>

      <section className="premium-section premium-story" id="premium-story">
        <div className="premium-section-heading">
          <div className="premium-kicker">A note from her parents</div>
          <h2>Some joys arrive quietly, then fill every corner of a <em>home.</em></h2>
        </div>
        <div className="premium-story-grid">
          <div className="premium-story-photo">
            <img src={parentsNoteImage.src} alt={parentsNoteImage.alt} loading="lazy" />
          </div>
          <div className="premium-story-copy">
            <blockquote>She has made our world softer, brighter, and wonderfully full.</blockquote>
            <p>We are overjoyed to share a beautiful milestone in our daughter’s life. Please join us as family, friends, and well-wishers gather to offer their blessings at this intimate beginning.</p>
            <div className="premium-signature">With love, S Udhay Kiran &amp; J S Mounika</div>
          </div>
        </div>
      </section>

      <div className="premium-ribbon" aria-label="Invitation highlights">
        <div className="premium-ribbon-inner">
          <div className="premium-ribbon-item"><Heart size={21} strokeWidth={1.5} /><span>Gathering for</span><strong>Our cherished girl</strong></div>
          <div className="premium-ribbon-item"><Flower2 size={21} strokeWidth={1.5} /><span>A morning of</span><strong>Love &amp; blessings</strong></div>
          <div className="premium-ribbon-item"><MapPin size={21} strokeWidth={1.5} /><span>At the family home</span><strong>JMS House</strong></div>
        </div>
      </div>

      <section className="premium-section premium-details" id="premium-details">
        <div className="premium-section-heading">
          <div className="premium-kicker">Keep this day close</div>
          <h2>The ceremony, with <em>every detail.</em></h2>
          <p>A morning made for warm embraces, traditional blessings, and the people who make a family feel like home.</p>
        </div>
        <div className="premium-details-layout">
          <div className="premium-countdown">
            <div className="premium-kicker">Counting every moment</div>
            {countdown ? (
              <>
                <h3>Until we gather<br />around her.</h3>
                <p>We cannot wait to see you there.</p>
                <div className="premium-countdown-grid" aria-label="Countdown to the naming ceremony">
                  <div className="premium-countdown-cell"><strong>{countdown.days}</strong><span>Days</span></div>
                  <div className="premium-countdown-cell"><strong>{String(countdown.hours).padStart(2, '0')}</strong><span>Hours</span></div>
                  <div className="premium-countdown-cell"><strong>{String(countdown.minutes).padStart(2, '0')}</strong><span>Minutes</span></div>
                  <div className="premium-countdown-cell"><strong>{String(countdown.seconds).padStart(2, '0')}</strong><span>Seconds</span></div>
                </div>
              </>
            ) : (
              <div className="premium-begun">The celebration has begun.<br />Our hearts are full.</div>
            )}
          </div>
          <div className="premium-detail-list">
            <div className="premium-detail-row">
              <div className="premium-detail-icon"><CalendarDays size={20} /></div>
              <div><h3>Monday, 12 October 2026</h3><p>Please join us for the auspicious naming ceremony of Our Precious Baby Girl.</p><small>Save the date</small></div>
            </div>
            <div className="premium-detail-row">
              <div className="premium-detail-icon"><Clock3 size={20} /></div>
              <div><h3>10:00 AM IST</h3><p>We will begin the ceremony in the morning, followed by time together over food and conversation.</p><small>The ceremony begins promptly</small></div>
            </div>
            <div className="premium-detail-row">
              <div className="premium-detail-icon"><Heart size={20} /></div>
              <div><h3>Come with your blessings</h3><p>Your presence is the most treasured gift. Traditional attire and your warmest wishes are warmly welcomed.</p><small>From our family to yours</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section premium-location" id="premium-location">
        <div className="premium-location-card">
          <div className="premium-location-copy">
            <div className="premium-kicker">Find your way to us</div>
            <h2>Come home<br /><em>to JMS House.</em></h2>
            <p>We would be honoured to welcome you into our home in Biradhanapalli for this intimate family celebration.</p>
            <div className="premium-address"><MapPin size={18} /><span>JMS House, Biradhanapalli,<br />Kuppam, Chittoor District,<br />Andhra Pradesh - 517425</span></div>
            <a className="premium-button" href="https://maps.app.goo.gl/miwCBvuuLGWgXiDJ9" target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={15} /></a>
          </div>
          <div className="premium-map" aria-label="Illustrated map showing JMS House">
            <div className="premium-map-pin"><Navigation size={20} fill="currentColor" /></div>
            <div className="premium-map-label">JMS House · Biradhanapalli</div>
          </div>
        </div>
      </section>

      <section className="premium-section premium-gallery" id="premium-gallery">
        <div className="premium-gallery-head">
          <div className="premium-section-heading">
            <div className="premium-kicker">A little album of love</div>
            <h2>Moments we want to <em>keep.</em></h2>
          </div>
          <p className="premium-gallery-note">Seven glimpses of the little life that has made our family even bigger.</p>
        </div>
        <div className="premium-gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="premium-gallery-tile" key={image.src}>
              <button type="button" onClick={() => setActiveImage(index)} aria-label={`Open photo: ${image.caption}`}>
                <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} />
              </button>
            </div>
          ))}
        </div>
        <div className="premium-gallery-footer"><span>Tap any photograph to see it more closely</span></div>
      </section>

      <section className="premium-section premium-closing">
        <div className="premium-kicker" style={{ justifyContent: 'center' }}>Your presence will make it complete</div>
        <h2>Come share the joy of <em>her beginning.</em></h2>
        <p>With folded hands and full hearts, we look forward to celebrating this precious day with you.</p>
        <div className="premium-actions">
          <button className="premium-button" type="button" onClick={() => jumpTo('premium-location')}>Plan your visit <MapPin size={15} /></button>
        </div>
      </section>

      <footer className="premium-footer">
        <span>With love, S Udhay Kiran &amp; J S Mounika</span>
        <span>A treasured family gathering · 12.10.2026</span>
      </footer>

      {activeImage !== null && (
        <div className="premium-lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Enlarged family photograph" onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
          <div className="premium-lightbox">
            <button className="premium-lightbox-arrow" type="button" aria-label="Previous photograph" onClick={() => setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length)}><ArrowLeft size={20} /></button>
            <figure className="premium-lightbox-figure">
              <img src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} />
              <figcaption>{galleryImages[activeImage].caption}</figcaption>
            </figure>
            <button className="premium-lightbox-arrow" type="button" aria-label="Next photograph" onClick={() => setActiveImage((activeImage + 1) % galleryImages.length)}><ArrowRight size={20} /></button>
            <button className="premium-lightbox-close" type="button" aria-label="Close enlarged photograph" onClick={() => setActiveImage(null)}><X size={19} /></button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;