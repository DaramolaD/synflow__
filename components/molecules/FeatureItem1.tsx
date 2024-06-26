import React from "react";

const FeatureItem1 = () => {
  return (
    <div className="flex flex-col flex-1 py-7 px-5">
      <p className="text-xl tablet:text-xl lg:text-3xl py-7 px-10">
        Effortlessly manage all your transactions in one secure platform.
      </p>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-base w-fit border border-primary-200 bg-primary-50 font-medium px-5 py-4 rounded-full">
            Automate Invoicing
          </p>
          <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row w-fit gap-2">
            <p className="text-base w-fit border text-red_color-text bg-red_color-bg border-red_color-border font-medium px-5 py-4 rounded-full">
              Fraud Detection
            </p>
            <p className="text-base w-fit border border-primary-200 bg-primary-50 font-medium px-5 py-4 rounded-full">
              Multi-Gateway Integration
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row w-fit gap-2">
            <p className="text-base w-fit border border-primary-200 bg-primary-50 font-medium px-5 py-4 rounded-full">
              Real-Time Payment Tracking
            </p>
            <p className="text-base w-fit border border-primary-200 bg-primary-50 font-medium px-5 py-4 rounded-full">
              Automatic Currency Conversion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem1;
