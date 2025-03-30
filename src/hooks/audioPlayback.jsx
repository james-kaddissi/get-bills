import { useRef, useEffect } from 'react';

const useAudio = (src) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    
    audioRef.current.load();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.load();
    }
  }, [src]);

  const play = () => {
    if (!audioRef.current) return Promise.reject(new Error('Audio not initialized'));
    
    audioRef.current.currentTime = 0;
    return audioRef.current.play().catch(e => {
      console.warn('Audio playback failed:', e);
    });
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return {
    play,
    pause,
    stop,
    get audio() { return audioRef.current; }
  };
};

export default useAudio;