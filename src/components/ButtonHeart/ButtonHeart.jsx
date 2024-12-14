import { useState } from "react";
import css from "./ButtonHeart.module.css";

export default function ButtonHeart() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`${css.heartButton} ${isClicked ? "active" : ""}`}
      onClick={handleClick}
      aria-label="Like"
    >
      <svg width="24" height="24" fill={isClicked ? "#e44848" : "#101828"}>
        <use href="/images/icons/collection.svg#icon-heart"></use>
      </svg>
    </button>
  );
}
