import React from "react";
import classes from "./stylingHome.module.css";
import lineImage from "public/assets/line.svg";
import SocialIcons from "../ui/socialIcons";
import WorkShow from "../ui/WorkShow";
import ButtonContact from "../ui/ButtonContact";
import ButtonDownload from "../ui/ButtonDownload";
import assetics from "public/assets/assetecLgo.svg";
import arrow from "public/assets/Arrow.svg";
import bots from "public/assets/bots.svg";
import Image from "next/image";
import TypeWriter from "./Typewriter";
import { useRouter } from "next/router";
const HomePage = () => {
  const router = useRouter();
  return (
    <div className={classes.homeMain}>
      <div className={classes.container}>
        <nav className={classes.navbarSec}>
          <div className={classes.socialInfo}>
            <Image src={lineImage} alt="line" className={classes.lineNav} />
            <SocialIcons />
          </div>
          <section>
            <h2 className={classes.logoStyle}>BUGaia</h2>
          </section>
          <section className={classes.navSec2}>
            <h3 className={classes.aboutSec}>
              <span>#</span>about-us
            </h3>
            <h3
              className={classes.aboutSec}
              onClick={() => {
                router.push("/contactus");
              }}
            >
              <span>#</span>contact-us
            </h3>
          </section>
        </nav>
        <main className={classes.mainSec}>
          <div className={classes.workShow3s}>
            <WorkShow imgSource={3} title={"Develop Apps"} />
          </div>
          <div className={classes.workShow2s}>
            <WorkShow imgSource={2} title={"Media Marketing"} />
          </div>
          <div className={classes.workShow1s}>
            <WorkShow imgSource={1} title={"Web Development"} />
          </div>
          <div className={classes.workShow2s}>
            <WorkShow imgSource={3} title={"Develop Apps"} />
          </div>
          <div className={classes.workShow3s}>
            <WorkShow imgSource={2} title={"Media Marketing"} />
          </div>
        </main>
        <div className={classes.infoSec}>
          <h2>
            <span>We do</span> <TypeWriter />
          </h2>
          <p>Languages: PHP, .net , Java</p>
          <div className={classes.btnSection}>
            <ButtonContact />
            <ButtonDownload />
          </div>
        </div>
        <Image
          src={assetics}
          alt="asseticsThings"
          className={classes.assetics}
        />
        <div className={classes.chating}>
          <p className={classes.chatNowText}>Chat Now!</p>
          <Image src={arrow} alt="Arrow-Chatbot" className={classes.arrow} />
          <div className={classes.chatbots}>
            <Image src={bots} alt="botchat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
