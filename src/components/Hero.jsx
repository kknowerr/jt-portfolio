import React from "react";
import clsx from "clsx";
import styles from "../style";
import { logobig } from "../assets"; 

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} h-screen`}>
    <div className={`header__circle-1`}></div>
    <div className={`header__circle header__circle-2`}></div>
      <img src={logobig} alt="logobig" className={clsx("w-[400px] h-auto",  "floatAnimation")} />
      <h1 className="font-visuletpro font-semibold text-[52px] text-black leading-[75px] text-center mt-8">
        <span className="text-gradient">Software Dev | Technician</span>{" "}
      </h1>

      <h1 className={clsx("font-visuletpro font-semibold text-[52px] text-black leading-[75px] text-center mt-8", "colorChange")}>
        Jacob Trevino
      </h1>
      <p className={`${styles.paragraph} max-w-[60%] mt-5 text-center`}>
        An ambitious high school student passionate about the world of tech, constantly honing my skills and expanding my knowledge. Eager to contribute significantly to any team or organization, and actively seeking work experience in related fields to develop my creativity, programming, and social skills.
      </p>
    </section>
  );
};

export default Hero;

