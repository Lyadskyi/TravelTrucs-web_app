import { useState, useEffect } from "react";
import css from "./ButtonHeart.module.css";

export default function ButtonHeart() {
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {});
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button className={css.iconButton}>
      <svg width="16" height="16">
        <use href="/images/icons/sprite.svg#icon-heart"></use>
      </svg>
    </button>
  );
}
