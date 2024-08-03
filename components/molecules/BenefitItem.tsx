import React from "react";
import ItemParagraph from "../atom/ItemParagraph";
import Image from "next/image";
import simplifyBenefit from "@/public/simplifyBenefit.svg";
import decisionBenefit from "@/public/decisionBenefit.svg";
import gainBenefit from "@/public/gainBenefit.svg";
import enhanceBenefit from "@/public/enhanceBenefit.svg";
import stableBenefit from "@/public/stableBenefit.svg";
import bootBenefit from "@/public/bootBenefit.svg";

type BenefitProps = {
  title: string;
  items: [];
};

const BenefitItem = () => {
  return (
    <div className="relative flex flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center w-full">
      {benefitData.map((data, index) => (
        <Image
          key={index}
          alt={data.text}
          src={data.img}
          className="w-full md:min-w-[280px] max-w-[448px] hover:bg-gray-b_g-60"
        />
      ))}
    </div>
  );
};

export default BenefitItem;

const benefitData = [
  {
    text: "simplifyBenefit",
    img: simplifyBenefit,
  },
  {
    text: "decisionBenefit",
    img: enhanceBenefit,
  },
  {
    text: "decisionBenefit",
    img: gainBenefit,
  },
  {
    text: "decisionBenefit",
    img: stableBenefit,
  },
  {
    text: "decisionBenefit",
    img: bootBenefit,
  },
  {
    text: "decisionBenefit",
    img: decisionBenefit,
  },
];
