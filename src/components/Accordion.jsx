import React, { useState, useRef, useEffect } from "react";
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import autoAnimate from "@formkit/auto-animate";

const Accordion = (props) => {
  const [isAccordion, setIsAccordion] = useState(props.isAccordion || false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleAccordion = () => {
    setIsAccordion(!isAccordion);
  };
  return (
    <div ref={parent} className="flex flex-col gap-4 py-4">
      {/* queation */}

      <p
        className="flex justify-between gap-2 font-semibold cursor-pointer sm:tet-lg"
        onClick={handleAccordion}
      >
        <span>{props.question}</span>
        {isAccordion ? (
          <img src={Minus} alt="minus-icon" className="w-auto h-6" />
        ) : (
          <img src={Plus} alt="minus-icon" className="w-auto h-6" />
        )}
      </p>

      {/* ans */}

      {isAccordion ? (
        <p className="text-sm sm:text-base ">{props.answer}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
