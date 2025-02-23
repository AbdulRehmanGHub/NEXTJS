"use client";

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((current_count) => {
        return current_count + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-3xl">{counter}</div>;
};

export default Counter;
