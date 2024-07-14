import { useEffect, useState } from "react";


const DynamicText = () => {
  const texts = [
    'Hem Chandra Upadhyay',
    'Web Developer',
    'Creative Designer',
    'Tech Enthusiast',
    'Devops engineer'
  ];
  const [currentText, setCurrentText] = useState('');
  const [fullText, setFullText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const typingSpeed = 150; // Milliseconds per character
  const deletingSpeed = 50; // Milliseconds per character

  useEffect(() => {
    const handleTyping = () => {
      if (typing) {
        if (currentText.length < fullText.length) {
          setCurrentText(prev => fullText.slice(0, prev.length + 1));
        } else {
          setTyping(false);
          setTimeout(() => setTyping(true), 2000); // Pause before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(prev => fullText.slice(0, prev.length - 1));
        } else {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setFullText(texts[(index + 1) % texts.length]);
          setTyping(true);
        }
      }
    };

    const intervalId = setInterval(handleTyping, typing ? typingSpeed : deletingSpeed);
    return () => clearInterval(intervalId);
  }, [currentText, typing, fullText, index, texts]);

  return (
    <span className="text-green-500">
      {currentText}
    </span>
  );
};

export default DynamicText;