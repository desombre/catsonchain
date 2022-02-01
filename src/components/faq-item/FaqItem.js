import { useState } from "react";
import "./FaqItem.css";

const FaqItem = ({ question, children }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.75em"
          height="1em"
          viewBox="0 0 384 512"
          className="icon"
          onClick={() => setShowAnswer((oldValue) => !oldValue)}
          style={{ transform: showAnswer ? "rotate(90deg)" :  ""}}
        >
          <path d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1L18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z" />
        </svg>{" "}
        {question}
      </h2>
      <div
        style={{
          visibility: showAnswer ? "visible" : "hidden",
          opacity: showAnswer ? 1 : 0,
          height: showAnswer ? "auto" : "0",
          overflow: "hidden",
          transition: "visibility 0s, opacity 0.5s linear",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FaqItem;
