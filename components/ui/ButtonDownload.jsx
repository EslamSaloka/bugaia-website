import React from "react";
import classes from "./ui.module.css";
import Image from "next/image";
const downloadLogo = "/assets/download.svg";
const ButtonDownload = () => {
  return (
    <div className={classes.downloadBtn}>
      <Image
        src={downloadLogo}
        alt="Download-Icon"
        width={30}
        height={30}
        className={classes.downloadImage}
      />
      <p>Download Portfolio</p>
    </div>
  );
};

export default ButtonDownload;
