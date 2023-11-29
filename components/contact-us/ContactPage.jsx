import React from "react";
import Image from "next/image";
import classes from "./contact.module.css";
import SocialIcons from "../ui/SocialIcons";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const exit = "/assets/exit.svg";
const dots = "/assets/dots.svg";
const lineImage = "/assets/line.svg";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
const ContactPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className={classes.contactMain}>
      <div className={classes.container}>
        <div className={classes.socialIcons}>
          <Image
            src={lineImage}
            alt="line"
            width={2}
            height={190}
            className={classes.lineImage}
          />
          <SocialIcons />
        </div>
        <div className={classes.contactInfo}>
          <div className={classes.sectionOne}>
            <div className={classes.emailInfo}>
              <h2>E-mail</h2>
              <p>bugaia@services.com</p>
            </div>
            <div className={classes.emailInfo}>
              <h2>Phone</h2>
              <p>+20 1286651628</p>
            </div>
          </div>
          <div className={classes.sectionTwo}>
            <h2>Send Us a Message</h2>
            <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
              <div className={classes.singleInput}>
                <label
                  htmlFor="email"
                  className={`${
                    formik.touched.email && formik.errors.email
                      ? classes.labelError
                      : null
                  }`}
                >
                  Your Email{""}
                  {formik.touched.email && formik.errors.email ? "*" : null}
                </label>
                <div className={classes.inputContainer}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`${classes.inputStyle} ${
                      formik.touched.email && formik.errors.email
                        ? classes.inputStyleError
                        : null
                    }`}
                  />
                  <span className={classes.border}></span>
                </div>
              </div>
              <div className={classes.singleInput}>
                <label htmlFor="phone">Your Phone Number (optional)</label>
                <div className={classes.inputContainer}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`${classes.inputStyle}  `}
                  />
                  <span className={classes.border}></span>
                </div>
              </div>

              <div className={classes.singleInput}>
                <label
                  htmlFor="message"
                  className={`${
                    formik.touched.message && formik.errors.message
                      ? classes.labelError
                      : null
                  }`}
                >
                  Message{""}
                  {formik.touched.message && formik.errors.message ? "*" : null}
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`${classes.inputStyle} ${
                    formik.touched.message && formik.errors.message
                      ? classes.inputStyleError
                      : null
                  }`}
                />
              </div>

              <button type="submit" className={classes.btnInfoSubmit}>
                Submit
              </button>
            </form>
          </div>
          <div className={classes.dots}>
            <Image src={dots} alt="dots" width={180} height={180} />
          </div>
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
            className={classes.axislogo}
            width={41}
            height={41}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
