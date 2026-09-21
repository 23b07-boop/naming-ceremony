import React, { useState, useRef } from 'react';
import { MapPin } from 'lucide-react';
import babyPhoto from '../assets/baby.jpg';
import './Hero.css';

/* ── Cute Pink / Lavender Ribbon Bow ── */
const PinkBow = () => (
  <svg className="hero__pink-bow" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 38 C35 15, 5 8, 5 38 C5 60, 35 55, 60 38Z" fill="#e2a8cf" />
    <path d="M58 38 C38 22, 12 16, 12 38 C12 52, 38 48, 58 38Z" fill="#f2c4e3" opacity="0.85" />
    <path d="M60 38 C85 15, 115 8, 115 38 C115 60, 85 55, 60 38Z" fill="#e2a8cf" />
    <path d="M62 38 C82 22, 108 16, 108 38 C108 52, 82 48, 62 38Z" fill="#f2c4e3" opacity="0.85" />
    <path d="M60 38 C45 50, 30 70, 42 76 C52 79, 58 58, 60 38Z" fill="#cd8cb8" />
    <path d="M60 38 C75 50, 90 70, 78 76 C68 79, 62 58, 60 38Z" fill="#cd8cb8" />
    <ellipse cx="60" cy="38" rx="9" ry="10" fill="#f5ceea" />
    <ellipse cx="60" cy="38" rx="6" ry="7" fill="#dc9cc6" />
  </svg>
);

/* ── Floating Background Clouds with Parallax ── */
const SoftCloudLeft = () => (
  <svg className="hero__cloud hero__cloud--left parallax-bg" data-speed="0.12" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 70 C10 70, 0 60, 0 50 C0 38, 12 30, 25 30 C30 15, 50 5, 75 5 C100 5, 120 20, 125 35 C135 30, 155 32, 165 45 C175 45, 185 55, 185 65 C185 75, 175 80, 160 80 L20 80 Z" fill="#ffffff" opacity="0.45" />
  </svg>
);

const SoftCloudRight = () => (
  <svg className="hero__cloud hero__cloud--right parallax-bg" data-speed="0.18" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 70 C10 70, 0 60, 0 50 C0 38, 12 30, 25 30 C30 15, 50 5, 75 5 C100 5, 120 20, 125 35 C135 30, 155 32, 165 45 C175 45, 185 55, 185 65 C185 75, 175 80, 160 80 L20 80 Z" fill="#ffffff" opacity="0.4" />
  </svg>
);

/* ── Light Purple Floral Background Decor ── */
const PurpleLeavesTopLeft = () => (
  <svg className="hero__decor hero__decor--top-left parallax-bg" data-speed="0.08" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-20 -20 C40 60, 90 140, 130 240" stroke="#b495be" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    <path d="M10 20 C60 0, 110 30, 100 70 C50 60, 20 40, 10 20Z" fill="#b495be" opacity="0.85" />
    <path d="M45 80 C105 65, 145 100, 130 140 C75 125, 55 95, 45 80Z" fill="#b495be" opacity="0.85" />
    <path d="M80 150 C140 135, 175 175, 160 215 C105 195, 90 165, 80 150Z" fill="#a584ab" opacity="0.85" />
    <path d="M110 220 C160 210, 190 245, 175 285 C125 270, 115 235, 110 220Z" fill="#a584ab" opacity="0.85" />
  </svg>
);

const PurpleLeavesBottomLeft = () => (
  <svg className="hero__decor hero__decor--bottom-left parallax-bg" data-speed="0.1" viewBox="0 0 240 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-20 380 C50 300, 100 200, 150 80" stroke="#b495be" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    <path d="M10 320 C60 280, 110 310, 90 350 C40 350, 20 335, 10 320Z" fill="#b495be" opacity="0.85" />
    <path d="M40 240 C100 200, 150 230, 130 275 C70 270, 50 250, 40 240Z" fill="#b495be" opacity="0.85" />
    <path d="M75 160 C135 120, 180 150, 160 195 C100 190, 85 170, 75 160Z" fill="#a584ab" opacity="0.85" />
    <path d="M110 90 C170 60, 210 90, 190 135 C130 130, 120 105, 110 90Z" fill="#a584ab" opacity="0.85" />
  </svg>
);

const PurpleFlowerTopRight = () => (
  <svg className="hero__decor hero__decor--top-right parallax-bg" data-speed="0.06" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M240 -10 C180 50, 140 120, 90 200" stroke="#b495be" strokeWidth="2.5" opacity="0.85" />
    <path d="M190 40 C140 30, 120 60, 145 85 C175 75, 185 55, 190 40Z" fill="#b495be" opacity="0.8" />
    <path d="M140 110 C90 100, 70 130, 95 155 C125 145, 135 125, 140 110Z" fill="#b495be" opacity="0.8" />
    <g transform="translate(130, 70) scale(1.2)">
      <path d="M40 40 C25 15, 25 -5, 40 -5 C55 -5, 55 15, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C65 25, 85 25, 85 40 C85 55, 65 55, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C55 65, 55 85, 40 85 C25 85, 25 65, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C15 55, -5 55, -5 40 C-5 25, 15 25, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <circle cx="40" cy="40" r="6" fill="#a46fb3" />
    </g>
  </svg>
);

const PurpleFlowerBottomRight = () => (
  <svg className="hero__decor hero__decor--bottom-right parallax-bg" data-speed="0.14" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M260 300 C190 220, 140 140, 80 40" stroke="#b495be" strokeWidth="3" opacity="0.85" />
    <path d="M210 240 C150 220, 125 250, 150 280 C185 270, 200 250, 210 240Z" fill="#b495be" opacity="0.8" />
    <path d="M150 150 C90 130, 65 160, 90 190 C125 180, 140 160, 150 150Z" fill="#b495be" opacity="0.8" />
    <g transform="translate(140, 180) scale(1.1)">
      <path d="M40 40 C25 15, 25 -5, 40 -5 C55 -5, 55 15, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C65 25, 85 25, 85 40 C85 55, 65 55, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C55 65, 55 85, 40 85 C25 85, 25 65, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <path d="M40 40 C15 55, -5 55, -5 40 C-5 25, 15 25, 40 40Z" fill="#cfa6d6" stroke="#b68bbd" strokeWidth="1" opacity="0.9" />
      <circle cx="40" cy="40" r="6" fill="#a46fb3" />
    </g>
  </svg>
);

/* ── Golden & Purple Stars ── */
const GoldenStar = ({ className, color = "#e6c885" }) => (
  <svg className={`hero__star ${className}`} viewBox="0 0 24 24" fill={color} opacity="0.88">
    <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
  </svg>
);

/* ── Light Purple Animated Barbie Dolls ── */
const BarbieDollLeft = () => (
  <svg className="hero__barbie hero__barbie--left parallax-bg" data-speed="0.2" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30 L23 40 L33 43 L23 46 L20 56 L17 46 L7 43 L17 40 Z" fill="#e9d3f5" opacity="0.9" />
    <path d="M130 20 L132 27 L139 29 L132 31 L130 38 L128 31 L121 29 L128 27 Z" fill="#edd6f7" opacity="0.8" />
    <path d="M60 85 C30 50, 0 65, 20 105 C35 135, 65 115, 60 85Z" fill="#e8cdfd" opacity="0.65" stroke="#c094e8" strokeWidth="1" />
    <path d="M60 100 C35 115, 10 135, 30 155 C50 170, 65 135, 60 100Z" fill="#d9b1f7" opacity="0.55" stroke="#c094e8" strokeWidth="1" />
    <path d="M65 40 C50 35, 45 60, 48 85 C52 110, 60 120, 65 125 C70 120, 78 110, 82 85 C85 60, 80 35, 65 40Z" fill="#fce4a6" />
    <path d="M65 35 C52 35, 42 50, 46 70 C50 65, 58 60, 65 60 C72 60, 80 65, 84 70 C88 50, 78 35, 65 35Z" fill="#faea93" />
    <path d="M55 37 L60 27 L65 34 L70 27 L75 37 Z" fill="#f5ce76" stroke="#e0ad38" strokeWidth="1" />
    <circle cx="65" cy="30" r="2" fill="#c976f5" />
    <circle cx="65" cy="52" r="14" fill="#ffd9cc" />
    <ellipse cx="60" cy="51" rx="1.8" ry="2.2" fill="#6b3ba7" />
    <ellipse cx="70" cy="51" rx="1.8" ry="2.2" fill="#6b3ba7" />
    <circle cx="61" cy="50" r="0.6" fill="#ffffff" />
    <circle cx="71" cy="50" r="0.6" fill="#ffffff" />
    <ellipse cx="57" cy="55" rx="2.5" ry="1.5" fill="#fca4be" opacity="0.6" />
    <ellipse cx="73" cy="55" rx="2.5" ry="1.5" fill="#fca4be" opacity="0.6" />
    <path d="M62 57 C64 60, 66 60, 68 57" stroke="#e0698b" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M65 66 L55 85 L75 85 Z" fill="#ba8de6" />
    <path d="M55 85 C40 100, 20 145, 30 175 C45 185, 85 185, 100 175 C110 145, 90 100, 75 85 Z" fill="#d2a6f2" stroke="#b683e3" strokeWidth="1.5" />
    <path d="M35 155 C55 170, 75 170, 95 155 C85 175, 45 175, 35 155Z" fill="#c391eb" />
    <path d="M55 85 C62 90, 68 90, 75 85" stroke="#ffffff" strokeWidth="2" fill="none" />
    <ellipse cx="65" cy="85" rx="4" ry="4" fill="#f5ceea" />
    <path d="M80 75 L110 45" stroke="#f5ce76" strokeWidth="2" strokeLinecap="round" />
    <path d="M110 45 L113 37 L120 40 L115 47 L120 54 L112 51 L108 58 L107 50 Z" fill="#fce4a6" />
  </svg>
);

const BarbieDollRight = () => (
  <svg className="hero__barbie hero__barbie--right parallax-bg" data-speed="0.25" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M130 40 L133 50 L143 53 L133 56 L130 66 L127 56 L117 53 L127 50 Z" fill="#e9d3f5" opacity="0.9" />
    <path d="M20 25 L22 32 L29 34 L22 36 L20 43 L18 36 L11 34 L18 32 Z" fill="#edd6f7" opacity="0.8" />
    <path d="M100 85 C130 50, 160 65, 140 105 C125 135, 95 115, 100 85Z" fill="#e8cdfd" opacity="0.65" stroke="#c094e8" strokeWidth="1" />
    <path d="M100 100 C125 115, 150 135, 130 155 C110 170, 95 135, 100 100Z" fill="#d9b1f7" opacity="0.55" stroke="#c094e8" strokeWidth="1" />
    <path d="M95 40 C110 35, 115 60, 112 85 C108 110, 100 120, 95 125 C90 120, 82 110, 78 85 C75 60, 80 35, 95 40Z" fill="#fce4a6" />
    <path d="M95 35 C108 35, 118 50, 114 70 C110 65, 102 60, 95 60 C88 60, 80 65, 76 70 C72 50, 82 35, 95 35Z" fill="#faea93" />
    <path d="M88 34 C85 28, 92 24, 95 30 C98 24, 105 28, 102 34 Z" fill="#e89bd6" />
    <circle cx="95" cy="31" r="2" fill="#ffffff" />
    <circle cx="95" cy="52" r="14" fill="#ffd9cc" />
    <ellipse cx="90" cy="51" rx="1.8" ry="2.2" fill="#6b3ba7" />
    <ellipse cx="100" cy="51" rx="1.8" ry="2.2" fill="#6b3ba7" />
    <circle cx="91" cy="50" r="0.6" fill="#ffffff" />
    <circle cx="101" cy="50" r="0.6" fill="#ffffff" />
    <ellipse cx="87" cy="55" rx="2.5" ry="1.5" fill="#fca4be" opacity="0.6" />
    <ellipse cx="103" cy="55" rx="2.5" ry="1.5" fill="#fca4be" opacity="0.6" />
    <path d="M92 57 C94 60, 96 60, 98 57" stroke="#e0698b" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M95 66 L85 85 L105 85 Z" fill="#ba8de6" />
    <path d="M85 85 C70 100, 50 145, 60 175 C75 185, 115 185, 130 175 C140 145, 120 100, 105 85 Z" fill="#d2a6f2" stroke="#b683e3" strokeWidth="1.5" />
    <path d="M65 155 C85 170, 105 170, 125 155 C115 175, 75 175, 65 155Z" fill="#c391eb" />
    <path d="M85 85 C92 90, 98 90, 105 85" stroke="#ffffff" strokeWidth="2" fill="none" />
    <ellipse cx="95" cy="85" rx="4" ry="4" fill="#f5ceea" />
    <path d="M80 75 L50 50" stroke="#f5ce76" strokeWidth="2" strokeLinecap="round" />
    <circle cx="48" cy="48" r="4" fill="#fce4a6" />
  </svg>
);

const Hero = () => {
  const [babyImgSrc, setBabyImgSrc] = useState(babyPhoto);
  const fileInputRef = useRef(null);

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBabyImgSrc(url);
    }
  };

  return (
    <section id="home" className="hero">
      {/* Hidden file input for changing baby photo */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Background Floating Elements with Parallax */}
      <SoftCloudLeft />
      <SoftCloudRight />
      <PurpleLeavesTopLeft />
      <PurpleLeavesBottomLeft />
      <PurpleFlowerTopRight />
      <PurpleFlowerBottomRight />

      <GoldenStar className="hero__star--1" color="#e6c885" />
      <GoldenStar className="hero__star--2" color="#cfa6d6" />
      <GoldenStar className="hero__star--3" color="#e6c885" />
      <GoldenStar className="hero__star--4" color="#cfa6d6" />

      <BarbieDollLeft />
      <BarbieDollRight />

      {/* Clean Original Naming Ceremony Arch Card */}
      <div className="hero__card reveal d1">
        <div 
          className="hero__portrait-container" 
          onClick={handlePhotoClick}
          title="Click to change baby photo"
        >
          <PinkBow />
          <div className="hero__portrait-ring">
            <img
              src={babyImgSrc}
              alt="Baby portrait"
              className="hero__portrait-img"
            />
          </div>
        </div>

        <p className="hero__sup reveal d2">Mr &amp; Mrs Nair warmly invite you to the</p>
        <h1 className="hero__title reveal d2">Naming Ceremony</h1>
        <p className="hero__sub reveal d3">of their New born baby</p>

        <p className="hero__date reveal d4">26th September 2026 &nbsp;|&nbsp; 11:45 AM</p>
        <h2 className="hero__venue reveal d4">Hall Complex</h2>

        <a
          href="https://www.google.com/maps/place/Hall+Complex,+1st+B+Cross+Rd,+7th+Block,+Koramangala,+Bengaluru,+Karnataka+560095/@12.9360833,77.6137733,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae144e76d1776f:0x2d3ed90329432ab8!8m2!3d12.9360833!4d77.6137733!16s%2Fg%2F11bbrm3m0j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="hero__map-btn reveal d5"
        >
          <MapPin size={16} strokeWidth={1.8} />
          Open in Maps
        </a>
      </div>
    </section>
  );
};

export default Hero;
