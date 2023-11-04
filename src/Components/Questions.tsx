import React from "react";
import { questionsprop } from "../MockData/QuizItems";

const Questions: React.FC<questionsprop> = ({ id, ques, options }) => {
  return (
    <div>
      {ques}
      <div className="list-none grid grid-cols-2">
        {options?.map((item, ind) => {
          return (
            <li key={ind}>{`${String.fromCharCode("a".charCodeAt(0) + ind)}:${item}`}</li>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
