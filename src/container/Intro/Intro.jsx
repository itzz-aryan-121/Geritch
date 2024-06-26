import React, { useRef, useEffect } from 'react';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the video is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = vidRef.current;
          if (video) {
            video.play();
          }
        } else {
          const video = vidRef.current;
          if (video) {
            video.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoContainerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app__video">
      <div ref={videoContainerRef} className="app__video-container">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          muted
          autoPlay={false} // Ensure autoPlay is set to false to control via Intersection Observer
          className="app__video-element"
          style={{maxWidth: '100%', height: 'auto'}}
        />
      </div>
    </div>
  );
};

export default Intro;
