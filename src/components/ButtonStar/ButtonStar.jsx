import { useState, useEffect } from "react";
import css from "./ButtonStar.module.css";

export default function ButtonStar() {
  const [isYellow, setIsYellow] = useState(false);

  useEffect(() => {
    const storedColor = localStorage.getItem("starColor");

    if (storedColor === "#ffc531") {
      setIsYellow(true);
    }
  }, []);

  const handleClick = () => {
    setIsYellow((prev) => !prev);
    if (!isYellow) {
      localStorage.setItem("starColor", "#ffc531");
    } else {
      localStorage.removeItem("starColor");
    }
  };

  return (
    <button className={css.iconButton} onClick={handleClick}>
      <svg width="16" height="16" style={{ fill: isYellow ? "#ffc531" : "#f2f4f7" }}>
        <use href="/images/icons/sprite.svg#icon-star"></use>
      </svg>
    </button>
  );
}
