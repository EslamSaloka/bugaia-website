import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = ({ turns }) => {
  const [typeArray, setTypeArray] = useState([]);
  useEffect(() => {
    const writerArray = [
      turns === 1 ? "Develop Apps" : null,
      turns === 2 ? "Media Marketing" : null,
      turns === 3 ? "Web Development" : null,
      turns === 4 ? "Develop Apps" : null,
      turns === 5 ? "Media Marketing" : null,
    ];
    setTypeArray([writerArray[turns - 1]]);
  }, [turns]);
  return (
    <Typewriter
      options={{
        strings: typeArray,
        autoStart: true,
        loop: true,

        deleteSpeed: 40,
      }}
    />
  );
};

export default TypeWriter;
