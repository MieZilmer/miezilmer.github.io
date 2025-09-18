import { useState, useEffect } from "react";

export default function AnimatedWelcome() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayText3, setDisplayText3] = useState("");
  const [displayText4, setDisplayText4] = useState("");
  const [displayText5, setDisplayText5] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const line1 = "Hello there, i'm";
  const line2 = "Mie";
  const line3 = "Zilmer";
  const line4 = "Welcome to my";
  const line5 = "Portfolio !";

  useEffect(() => {
    if (isComplete) return;

    const typeSpeed = 100;

    const timer = setTimeout(() => {
      if (currentLine === 1) {
        if (currentIndex < line1.length) {
          setDisplayText1(line1.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentLine(2);
          setCurrentIndex(0);
        }
      } else if (currentLine === 2) {
        if (currentIndex < line2.length) {
          setDisplayText2(line2.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentLine(3);
          setCurrentIndex(0);
        }
      } else if (currentLine === 3) {
        if (currentIndex < line3.length) {
          setDisplayText3(line3.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentLine(4);
          setCurrentIndex(0);
        }
      } else if (currentLine === 4) {
        if (currentIndex < line4.length) {
          setDisplayText4(line4.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentLine(5);
          setCurrentIndex(0);
        }
      } else if (currentLine === 5) {
        if (currentIndex < line5.length) {
          setDisplayText5(line5.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsComplete(true);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    currentLine,
    isComplete,
    line1,
    line2,
    line3,
    line4,
    line5,
  ]);

  return (
    <section id="home">
      <img src="/data/img/hero.png" alt="" />
      <div className="hero-text">
        <div className="animated-welcome">
          <div className="welcome-text">
            <div className="welcome-line-1">
              {displayText1}
              {currentLine === 1 && !isComplete && (
                <span className="cursor">|</span>
              )}
            </div>
            <div className="welcome-line-2 name-line">
              {displayText2}
              {currentLine === 2 && !isComplete && (
                <span className="cursor">|</span>
              )}
            </div>
            <div className="welcome-line-3 name-line">
              {displayText3}
              {currentLine === 3 && !isComplete && (
                <span className="cursor">|</span>
              )}
            </div>
            <div className="welcome-line-4">
              {displayText4}
              {currentLine === 4 && !isComplete && (
                <span className="cursor">|</span>
              )}
            </div>
            <div className="welcome-line-5 name-line">
              {displayText5}
              {currentLine === 5 && !isComplete && (
                <span className="cursor">|</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
