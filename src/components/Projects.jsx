
import React, { useState } from "react";
import styles from "../style";

const Projects = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder function for handling form submission
    console.log("Words submitted:", word1, word2);
  };

  return (
    <section id="input-form" className={`${styles.paddingY} ${styles.flexCenter}`}>
 vr     <div className={`flex flex-col items-center w-full max-w-[500px]`}>
        <h2 className="font-visuletpro font-semibold text-[32px] text-black leading-[40px] text-center mb-5">
          Enter Words to Compare
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
            placeholder="Enter first word"
            className="w-full p-4 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
            placeholder="Enter second word"
            className="w-full p-4 mb-4 border border-gray-300 rounded-md"
          />
          <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-md">
            Find Cognate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Projects;
