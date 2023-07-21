import { useState, useEffect } from "react";

type Props = { text: string; delay: number; onFinish?: () => void };

export function Typewriter({ text, delay, onFinish }: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      onFinish?.();
    }
  }, [currentIndex, delay, onFinish, text]);

  return (
    <>
      <wbr />
      {currentText}
    </>
  );
}
