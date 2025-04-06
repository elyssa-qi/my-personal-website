import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypewriterComponent: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello!", "你好!", "Bonjour!", "Ciao!", "こんにちは!", "안녕하세요!", "ನಮಸ್ಕಾರ!", "नमस्ते!"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2 className="text-xl md:text-[30px] font-roboto font-[570] inline-block">
      <span ref={el} />
    </h2>
  );
};

export default TypewriterComponent;