import React from "react";
import classes from "./ui.module.css";
import Image from "next/image";
import downloadLogo from "../../public/assets/download.svg";
const ButtonDownload = () => {
  return (
    <div className={classes.downloadBtn}>
      <Image
        src={downloadLogo}
        alt="Download-Icon"
        className={classes.downloadImage}
      />
      <p>Download Portfolio</p>
    </div>
  );
};

export default ButtonDownload;
