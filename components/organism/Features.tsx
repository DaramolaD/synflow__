"use client";
import React, { useState } from "react";
import Heading2 from "../atom/Heading2";
import FeatureItem1 from "../molecules/FeatureItem1";
export type Props = {
  titleState: string;
  featureState: string;
  onPageChange: (page: number) => void;
};
const Features = () => {
  const [featureState, setFeatureState] = useState<string>("");
  const [titleState, setTitleState] = useState<string>(
    "Effortlessly manage all your transactions in one secure platform."
  );

  const handleState = (subState: any) => {
    setFeatureState(subState.state);
    setTitleState(subState.subTitle);
  };
  return (
    <div className="sectionContainer w-full flex flex-col items-center justify-center gap-20 pb-12 px-5">
      <Heading2 title="Optimize Your Business with Intelligent Solutions" />
      <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden border border-dark-100">
        <div className="flex flex-row md:flex-col flex-1 w-full bg-[#FAFAFA] overflow-x-scroll divide-x md:divide-y divide-[#E4E4E7]">
          {features.map(({ id, title, subState }) => (
            <p
              key={id}
              className="text-xl tablet:text-xl lg:text-3xl px-4 py-7 md:py-7 md:px-10 hover:text-white hover:bg-subtitle-gradient text-nowrap"
            >
              {title}
            </p>
          ))}
        </div>
        <FeatureItem1 />
      </div>
    </div>
  );
};

export default Features;

const features = [
  {
    id: 1,
    title: "Seamless Payment Processing",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 2,
    title: "Automated Payroll Management",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 3,
    title: "Comprehensive Expense Tracking",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 4,
    title: "Subscription Management",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 5,
    title: "Customizable Invoicing",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 6,
    title: "Financial Analytics and Reporting",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
];
// Seamless Payment Processing
// Effortlessly manage all your transactions in one secure platform.
// Automated Payroll Management
// Subscription Management
