import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Card from "./Card";

const Cards = () => {
  const { scrollY } = useViewportScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity1 = useTransform(
    scrollY,
    [600, 700, 750, 800, 850],
    [1, 0.95, 0.85, 0.8, 0]
  );
  const opacity2 = useTransform(scrollY, [1250, 1300, 1450], [1,0.9, 0]);
  const scale1 = useTransform(scrollY, [0, 800, 900], [1, 0.95, 0.90]);
  const scale2 = useTransform(scrollY, [800, 1200, 1300], [1, 0.95, 0.90]);
  
  return (
    <section className="w-full bg-white flex flex-wrap justify-center mt-8">
      <motion.div
        className="sticky top-40"
        style={{ translateY, opacity: opacity1, scale:scale1 }}
      >
        <Card
          heading={"Manage All Your Credit Cards in One Place."}
          description={
            "Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts."
          }
          imgUrl={"/image_15.png"}
          bgColor={"bg-orange-50"}
          imgWidth={600}
          marginLeft={"left-12"}
        />
      </motion.div>

      <motion.div
        className="sticky top-44"
        style={{ translateY, opacity: opacity2 ,scale:scale2}}
      >
        <Card
          heading={"Goal-Oriented Financial Planning."}
          description={
            "Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams."
          }
          imgUrl={"/image_18.png"}
          bgColor={"bg-green-300"}
          imgWidth={250}
          marginLeft={"left-12"}
        />
      </motion.div>

      <motion.div style={{ translateY }}>
        <Card
          heading={"Smart Spending Insights."}
          description={
            "Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster."
          }
          imgUrl={"/image_21.png"}
          bgColor={"bg-green-100"}
          imgWidth={250}
          marginLeft={"left-12"}
        />
      </motion.div>
    </section>
  );
};

export default Cards;
