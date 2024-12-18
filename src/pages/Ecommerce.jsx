import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, Sparkline } from "../components";
import {
  earningData,
  SparklineAreaData,
  PieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/contextProvider";
import SparkLine from "../components/Charts/SparkLine";

const Ecommerce = () => {

  const {currentColor} =useStateContext()
  return (
    <div className="mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl ">$65,668,000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-5 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, background: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-40 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg dark:bg m-3 rounded-2xl md:w-700">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue update</p>
            <div className="flex  items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-xl font-semibold">$31.00</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400">
                    31%
                  </span>
                </p>
                <p className="text-gray-500mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-xl font-semibold">$46,000</span>
                </p>
                <p className="text-gray-500mt-1">Expense</p>
              </div>

              <div className="mt-6">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Downlod Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked width='320px'
              height='360px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
