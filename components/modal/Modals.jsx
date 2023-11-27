import React from "react";
import classes from "./modals.module.css";
import Image from "next/image";
import SocialIcons from "../ui/SocialIcons";
import ButtonContact from "../ui/ButtonContact";
import ButtonDownload from "../ui/ButtonDownload";
const lineImage = "/assets/line.svg";
const lotsOfDots = "/assets/MoreDots.svg";
const exit = "/assets/exit.svg";
import { useRouter } from "next/router";
const Modals = ({ title, desc, image }) => {
  const router = useRouter();
  return (
    <div className={classes.modalMain}>
      <div className={classes.container}>
        <div className={classes.socialIcons}>
          <Image
            src={lineImage}
            alt="line"
            className={classes.lineImage}
            width={2}
            height={190}
          />
          <SocialIcons />
        </div>
        <div className={classes.modalBody}>
          <div className={classes.bodyHead}>
            <div className={classes.bodyHeadInfo}>
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>

            <Image src={image} alt={title} className={classes.modalImage} />
          </div>
          <div className={classes.btns}>
            <ButtonContact />
            <ButtonDownload />
          </div>
          <div className={classes.dots}>
            <Image src={lotsOfDots} alt="dots" width={300} height={180} />
          </div>
          <div
            className={classes.exit}
            onClick={() => {
              router.back();
            }}
          >
            <Image
              src={exit}
              alt="exit"
              className={classes.exitImage}
              width={42}
              height={42}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
