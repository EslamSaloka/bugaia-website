import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Develop Apps",
          "Media Marketing",
          "Web Development",
          "Develop Apps",
          "Media Marketing",
        ],
        autoStart: true,
        loop: true,

        deleteSpeed: 22,
      }}
    />
  );
};

export default TypeWriter;
