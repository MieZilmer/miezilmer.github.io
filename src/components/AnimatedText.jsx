import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedText({ initialText, animatedTextArray }) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: animatedTextArray,
      typeSpeed: 100,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [animatedTextArray]);

  return (
    <>
      {initialText} <span style={{ whiteSpace: "pre" }} ref={el} />
    </>
  );
}
