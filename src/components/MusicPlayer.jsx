import React, { useState, useRef, useEffect } from 'react';
import { Phone, Music } from 'lucide-react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 1.0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log('Playback waiting for interaction:', err);
        });
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleAudio = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 1.0;
      audio.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.error('Play error:', err);
      });
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    // Expose global controller for OpeningCurtain and VideoSection
    window.__bgMusic = {
      play: playAudio,
      pause: pauseAudio,
      toggle: toggleAudio,
    };

    // Auto-start on first user interaction anywhere
    const handleFirstUserGesture = () => {
      playAudio();
      gestureEvents.forEach((evt) => document.removeEventListener(evt, handleFirstUserGesture));
    };

    const gestureEvents = ['click', 'touchstart', 'pointerdown', 'keydown'];
    gestureEvents.forEach((evt) => document.addEventListener(evt, handleFirstUserGesture, { passive: true }));

    return () => {
      gestureEvents.forEach((evt) => document.removeEventListener(evt, handleFirstUserGesture));
      delete window.__bgMusic;
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        id="bg-invitation-music"
        loop
        preload="auto"
        playsInline
        src="/music.mp3"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          console.warn('Primary audio failed, switching to fallback');
          if (audioRef.current && audioRef.current.src.indexOf('lullaby.mp3') === -1) {
            audioRef.current.src = '/lullaby.mp3';
            audioRef.current.play().catch(() => {});
          }
        }}
      >
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/lullaby.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating buttons bottom-right */}
      <div className="floating-buttons">
        <a
          href="tel:8073421045"
          className="floating-btn floating-btn--phone"
          aria-label="Call 8073421045"
          title="Call 8073421045"
        >
          <Phone size={22} strokeWidth={2.4} color="#3c2d42" />
        </a>
        <button
          type="button"
          className={`floating-btn floating-btn--music ${playing ? 'floating-btn--playing' : ''}`}
          onClick={toggleAudio}
          aria-label={playing ? 'Pause music' : 'Play music'}
          title={playing ? 'Pause music' : 'Click to Play Music (High Volume)'}
        >
          {playing ? (
            <Music size={22} strokeWidth={2.4} color="#3c2d42" />
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3c2d42"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="18" r="4" />
              <path d="M12 18V2l7 4" />
              <line x1="3" y1="3" x2="21" y2="21" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;

