import React from "react";
import classes from "./stylingHome.module.css";
import SocialIcons from "../ui/socialIcons";
import WorkShow from "../ui/WorkShow";
import ButtonContact from "../ui/ButtonContact";
import ButtonDownload from "../ui/ButtonDownload";
import Image from "next/image";
import TypeWriter from "./Typewriter";
import { useRouter } from "next/router";
const bots = "/assets/bots.svg";
const arrow = "/assets/Arrow.svg";
const assetics = "/assets/assetecLgo.svg";
const lineImage = "/assets/line.svg";
const HomePage = () => {
  const router = useRouter();
  return (
    <div className={classes.homeMain}>
      <div className={classes.container}>
        <nav className={classes.navbarSec}>
          <div className={classes.socialInfo}>
            <Image
              src={lineImage}
              alt="line"
              className={classes.lineNav}
              width={2}
              height={150}
            />
            <SocialIcons />
          </div>
          <section>
            <h2 className={classes.logoStyle}>BUGaia</h2>
          </section>
          <section className={classes.navSec2}>
            <h3
              className={classes.aboutSec}
              onClick={() => {
                router.push("/aboutus");
              }}
            >
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
          <div
            className={classes.workShow3s}
            onClick={() => {
              router.push("/mobile-development");
            }}
          >
            <WorkShow imgSource={3} title={"Develop Apps"} />
          </div>
          <div
            className={classes.workShow2s}
            onClick={() => {
              router.push("/media-marketing");
            }}
          >
            <WorkShow imgSource={2} title={"Media Marketing"} />
          </div>
          <div
            className={classes.workShow1s}
            onClick={() => {
              router.push("/web-development");
            }}
          >
            <WorkShow imgSource={1} title={"Web Development"} />
          </div>
          <div
            className={classes.workShow2s}
            onClick={() => {
              router.push("/mobile-development");
            }}
          >
            <WorkShow imgSource={3} title={"Develop Apps"} />
          </div>
          <div
            className={classes.workShow3s}
            onClick={() => {
              router.push("/media-marketing");
            }}
          >
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
          width={155}
          height={155}
        />
        <div className={classes.chating}>
          <p className={classes.chatNowText}>Chat Now!</p>
          <Image
            src={arrow}
            alt="Arrow-Chatbot"
            className={classes.arrow}
            width={54}
            height={80}
          />
          <div className={classes.chatbots}>
            <Image src={bots} alt="botchat" width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
