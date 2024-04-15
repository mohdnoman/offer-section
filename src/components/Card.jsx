import React from "react";
import { motion } from "framer-motion";
const Card = ({
  heading,
  description,
  imgUrl,
  bgColor,
  imgw = 600,
  ml = 16,
}) => {
  return (
    <motion.div className="container mx-auto mt-12">
      <div
        className={`max-w-[80vw] max-h-[90vh] m-4 flex ${bgColor} rounded-[24px] `}
      >
        <div className="max-w-[30rem] ml-10 mt-1 mb-20 text-left flex flex-col justify-center">
          <h1 className="text-4xl text-green-900 font-semibold mb-6">
            {heading}
          </h1>
          <p className="font-sans text-xl text-[#47836f] font-light mt-6">
            {description}
          </p>
        </div>
        <div className={`relative left-12 bottom-16 ml-${ml}`}>
          <img
            src={imgUrl}
            alt="hero"
            width={imgw}
            className="h-auto max-h-[100%]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
