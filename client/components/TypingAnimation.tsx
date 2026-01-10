import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deletionSpeed?: number;
  delayBetween?: number;
}

export default function TypingAnimation({
  texts,
  speed = 50,
  deletionSpeed = 30,
  delayBetween = 2000,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletionSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, deletionSpeed, delayBetween]);

  return (
    <span>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
}
