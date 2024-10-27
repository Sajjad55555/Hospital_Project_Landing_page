"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimate(props: any) {
  return (
    <>
      <div className="text-white text-4xl font-bold animate-pulse">
        <TypeAnimation
          sequence={[
            "Your Health", // First part
            1000, // Pause for 1 second
            "Your Health\nis our", // Adding the next part
            1000, // Pause for 1 second
            "Your Health\nis our\npriority", // Complete the sentence
            1000, // Pause for 1 second
            "", // Empty string to reset the line
            1000, // Pause before restarting
            "Your Health", // Restart from the beginning
            1000, // Pause for 1 second
          ]}
          speed={5}
          repeat={Infinity}
          wrapper="span"
          className="whitespace-pre-line" // Enables rendering of \n as line breaks
        />
      </div>
    </>
  );
}
