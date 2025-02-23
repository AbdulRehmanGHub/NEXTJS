// "use client";       // // the disadvantage of using use client here is that, the whole page is become for client side and next is promoting/popular for the server side rendering. So, we can fix this by using use client and client side things in new separate component. This will not make our whole page client side, but only few part which are required to become client side.

import Counter from "@/components/Counter";

// // now, I have to move all these in separate Counter component
// import React, { useState, useEffect } from "react";

const TestCounter = () => {
  // // Also, I have to move all these to Counter component
  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter(
  //         (current_count) => {
  //         return current_count + 1;
  //       }
  //     );
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl">Test Counter</h2>
      {/* <div className="text-3xl">{counter}</div> i have to move this line also to component */}
      <Counter />
    </div>
  );
};

export default TestCounter;
