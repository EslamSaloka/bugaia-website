import React, { useEffect, useState } from "react";
import classes from "./ui.module.css";
import Image from "next/image";
const shadowlight = "/assets/shadowlight.svg";
const WorkShow = ({ imgSource, title, number, turns }) => {
  const mytitle = title.split(" ");
  const firstWord = mytitle[0] + " ";
  const secondWord = mytitle[1];
  const imgName =
    imgSource === 1 ? "screen" : imgSource === 2 ? "brodcast" : "mobile";
  const [currentImage, setCurrentImage] = useState("Gray");
  const [showYellowBox, setShowYellowBox] = useState(false);
  // const handleMouseEnter = async () => {
  //   setCurrentImage("Green");
  //   setTimeout(() => {
  //     setCurrentImage("Yellow");
  //   }, 300);
  //   setShowYellowBox(true);
  // };
  // const handleMouseLeave = () => {
  //   setCurrentImage("Green");
  //   setTimeout(() => {
  //     setCurrentImage("Gray");
  //   }, 350);
  //   setShowYellowBox(false);
  // };
  useEffect(() => {
    if (number === turns) {
      console.log(turns, number);

      setCurrentImage("Green");
      const yellowTime = setTimeout(() => {
        setCurrentImage("Yellow");
      }, 1500);
      setShowYellowBox(true);
      return () => {
        clearTimeout(yellowTime);
      };
    } else {
      setCurrentImage("Gray");
      setShowYellowBox(false);
    }
  }, [turns]);
  return (
    <div className={classes.workShow}>
      <Image
        src={`/assets/${imgName}${currentImage}.svg`}
        alt={title}
        className={`${classes.imgesLogo} `}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        width={101}
        height={101}
      />
      <Image
        src={shadowlight}
        alt="shadowLIght"
        className={classes.shadowlight}
        width={120}
        height={60}
      />
      <div className={classes.workTitleBox}>
        {showYellowBox ? <div className={classes.yellowBox}></div> : null}
        <p>
          <span>{firstWord}</span>
          {secondWord}
        </p>
      </div>
    </div>
  );
};

export default WorkShow;
