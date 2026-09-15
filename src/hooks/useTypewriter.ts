import { useEffect, useState } from 'react';

export default function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      setDisplayed(text.slice(0, ++index));
      if (index >= text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [speed, text]);
  return displayed;
}
