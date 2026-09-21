import React, { useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Listen to iframe postMessages from YouTube player
    const handleMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && data.event === 'infoDelivery' && data.info) {
          const state = data.info.playerState;
          if (state === 1) {
            // YouTube is Playing -> Pause background music
            window.__bgMusic?.pause();
          } else if (state === 2 || state === 0) {
            // YouTube is Paused or Ended -> Resume background music
            window.__bgMusic?.resume();
          }
        }
      } catch {
        // ignore non-json messages
      }
    };

    window.addEventListener('message', handleMessage);

    // Also send listening command to YouTube iframe once loaded
    const timer = setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'listening', id: 1 }),
          '*'
        );
      }
    }, 1000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="video-sec">
      <h2 className="video-sec__heading container">
        A Moment to Remember
      </h2>
      <div className="container video-sec__wrap">
        <iframe
          ref={iframeRef}
          className="video-sec__frame"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1&rel=0&modestbranding=1"
          title="Baby naming ceremony video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoSection;
