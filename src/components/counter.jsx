// src/components/Counter.js
import React, { useState } from "react";
import SlotCounter from "react-slot-counter";
import { IconContext } from "react-icons";
import { CiHeart } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { GiSpades } from "react-icons/gi";

import "../style/home.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counert-main">
        <div className="counter-child">
          <IconContext.Provider
            value={{ className:'icon'}}
          >
            <div className="icon-div">
            <CiStar />
            </div>
          </IconContext.Provider>
          <h1>
            <SlotCounter duration={3} value={168} />
          </h1>
          <h3>Design</h3>
        </div>
        <div className="counter-child">
        <IconContext.Provider
            value={{ className:'icon'}}
          >
            <div className="icon-div">
            <CiLocationArrow1 />
            </div>
          </IconContext.Provider>
          <h1>
            <SlotCounter duration={3} value={2590} />
          </h1>
          <h3>Marketing</h3>
        </div>
        <div className="counter-child">
        <IconContext.Provider
            value={{ className:'icon'}}
          >
            <div className="icon-div">
            <CiHeart />
            </div>
          </IconContext.Provider>
          <h1>
            <SlotCounter duration={3} value={347} />
          </h1>
          <h3>Development</h3>
        </div>
        <div className="counter-child">
        <IconContext.Provider
            value={{ className:'icon'}}
          >
            <div className="icon-div">
            <GiSpades />
            </div>
          </IconContext.Provider>
          <h1>
            <SlotCounter duration={3} value={191} />
          </h1>
          <h3>User Experience</h3>
        </div>
      </div>
    </>
  );
};

export default Counter;
