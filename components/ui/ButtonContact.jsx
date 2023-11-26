import React from "react";
import classes from "./ui.module.css";
import { useRouter } from "next/router";
const ButtonContact = () => {
  const router = useRouter();
  return (
    <div
      className={classes.contactUs}
      onClick={() => {
        router.push("/contactus");
      }}
    >
      <p>Contact us!</p>
    </div>
  );
};

export default ButtonContact;
