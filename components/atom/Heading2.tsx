import React from "react";

interface Title {
  title: string;
}

const Heading2 = ({ title }: Title) => {
  return (
    <h2 className="bg-title-gradient bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-5xl">
      {title}
    </h2>
  );
};

export default Heading2;
