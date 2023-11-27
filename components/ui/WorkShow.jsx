import React, { useState } from "react";
import classes from "./ui.module.css";
import shadowlight from "/public/assets/shadowlight.svg";
import Image from "next/image";
const WorkShow = ({ imgSource, title }) => {
  const mytitle = title.split(" ");
  const firstWord = mytitle[0] + " ";
  const secondWord = mytitle[1];
  const imgName =
    imgSource === 1 ? "screen" : imgSource === 2 ? "brodcast" : "mobile";
  const [currentImage, setCurrentImage] = useState("Gray");
  const [showYellowBox, setShowYellowBox] = useState(false);
  const handleMouseEnter = async () => {
    setCurrentImage("Green");
    setTimeout(() => {
      setCurrentImage("Yellow");
    }, 300);
    setShowYellowBox(true);
  };
  const handleMouseLeave = () => {
    setCurrentImage("Green");
    setTimeout(() => {
      setCurrentImage("Gray");
    }, 350);
    setShowYellowBox(false);
  };
  return (
    <div className={classes.workShow}>
      <Image
        src={require(`public/assets/${imgName}${currentImage}.svg`)}
        alt={title}
        className={`${classes.imgesLogo} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Image
        src={shadowlight}
        alt="shadowLIght"
        className={classes.shadowlight}
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
