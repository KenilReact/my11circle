import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ question, answer, bg, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div
          className={`accordion-title ${bg} p-4 rounded-md  flex justify-between items-center my-4 cursor-pointer`}
          onClick={() => setIsActive(!isActive)}
        >
          <p className={"question text-xl lg:text-xl md:text-lg xs:text-base"}>
            {question}
          </p>
          {isActive ? (
            icon === 1 ? (
              <MdKeyboardArrowUp className="button text-3xl" />
            ) : (
              <FaMinus />
            )
          ) : icon === 1 ? (
            <MdKeyboardArrowDown className="button text-3xl" />
          ) : (
            <FaPlus />
          )}
        </div>
        {isActive && <p className="answer p-4 lg:text-base xs:text-sm">{answer}</p>}
      </div>
    </>
  );
};

export default Accordion;
