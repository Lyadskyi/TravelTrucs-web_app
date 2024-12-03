import { useEffect, useState } from "react";
import ButtonHeart from "../../components/ButtonHeart/ButtonHeart";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
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
    <div className={css.containerCards}>
      <div className="sideBar">
        <div className={css.location}>
          <h3 className={css.titleLocation}>Location</h3>
          <div className={css.geoLocation}>Kyiv, Ukraine</div>
        </div>
        <h3 className={css.filters}>Filters</h3>
        <div className={css.equipment}>
          <h3 className={css.titleEquipment}>Vehicle equipment</h3>
        </div>
        <div className={css.type}>
          <h3 className={css.titleEquipment}>Vehicle type</h3>
        </div>
        <button className={css.btn}>Search</button>
      </div>
      <div className={css.boxCard}>
        <img className={css.image} src="/images/catalog/Mavericks_desk.jpg" alt="Maverics" />
        <div className={css.textContainer}>
          <h2 className={css.title}>Maverics</h2>
          <h2 className={css.amount}>€8000.00</h2>
          <ButtonHeart />
          <div className={css.reviews}>
            <button className={css.iconButton} onClick={handleClick}>
              <svg width="16" height="16" style={{ fill: isYellow ? "#ffc531" : "#f2f4f7" }}>
                <use href="/images/icons/sprite.svg#icon-star"></use>
              </svg>
            </button>
            <p className={css.descReviews}>4.4(2 Reviews)</p>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-map"></use>
            </svg>
            <p className={css.descLocation}>Kyiv, Ukraine</p>
          </div>
          <p className={css.text}>
            Embrace simplicity and freedom with the Mavericks panel truck...
          </p>
          <button className={css.btnMore}>Show more</button>
        </div>
      </div>
    </div>
  );
}
