import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Web Development", "Media Marketing", "Develop Apps"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriter;
