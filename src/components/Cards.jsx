import React from "react";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";

const Cards = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full bg-white flex flex-wrap justify-center mt-8">
      <div>
        <Card
          heading={"Manage All Your Credit Cards in One Place."}
          description={
            "Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts."
          }
          imgUrl={"/image_15.png"}
          bgColor={"bg-orange-50"}
          imgw={500}
        />
      </div>
      
      <Card
        heading={"Goal-Oriented Financial Planning."}
        description={
          "Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams."
        }
        imgUrl={"/image_18.png"}
        bgColor={"bg-green-300"}
        imgw={250}
        ml={20}
      />
      <Card
        heading={"Smart Spending Insights."}
        description={
          "Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster."
        }
        imgUrl={"/image_21.png"}
        bgColor={"bg-green-100"}
        imgw={250}
      />
    </div>
  );
};

export default Cards;
