import React from "react";

export const Winner = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-8 mb-5">
          <div className="w-full lg:flex mb-12 rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="lg:w-2/3">
              <img
                src="//cdnm.myracehorse.com/wp-content/uploads/2023/11/2022-MRH-Edge-Slider_Horsemanship.jpg"
                alt="Edge Racing"
                className="w-full h-full object-cover mt-13"
                width={1140}
              />
            </div>
            <div className="lg:w-1/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800"><b>Edge Racing</b></h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                Powered by MyRacehorse
              </h4>
              <p className="text-gray-600 mb-6 fs-17">
                Edge Racing is committed to providing our partners with a
                first-class ownership experience. From in-person interactions,
                top horsemanship, exceptional communication, and management,
                Edge strives to put the best interest of horses and partners
                first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
