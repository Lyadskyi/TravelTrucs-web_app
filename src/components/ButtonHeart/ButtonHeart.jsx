import { useState } from "react";
import css from "./ButtonHeart.module.css";

export default function ButtonHeart() {
  const [isRed, setIsRed] = useState(false);

  return (
    <button className={css.iconButton}>
      <svg width="16" height="16">
        <use href="/images/icons/sprite.svg#icon-heart"></use>
      </svg>
    </button>
  );
}
