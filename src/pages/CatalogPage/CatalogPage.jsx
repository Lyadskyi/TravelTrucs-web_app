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
          <ul className={css.filtersContainer}>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">AC</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Automatic</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Bathroom</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Gas</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Kitchen</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Microwave</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Petrol</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Radio</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Refrigerator</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">TV</button>
            </li>
            <li className={css.filtersCheckBoxes}>
              <label>
                <input type="checkbox" name="terms" />
              </label>
              <button type="button">Water</button>
            </li>
          </ul>
        </div>
        <div className={css.type}>
          <h3 className={css.titleEquipment}>Vehicle type</h3>
          <ul className={css.filtersContainer}>
            <li>
              <input name="form" type="radio" id="1" value="Van"></input>
              <label className={css.filtersLabels} htmlFor="1">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/sprite.svg#icon-grid_1x2"></use>
                </svg>
                Alcove
              </label>
            </li>
            <li>
              <input name="form" type="radio" id="2" value="Van"></input>
              <label className={css.filtersLabels} htmlFor="2">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/sprite.svg#icon-grid_2x2"></use>
                </svg>
                Fully Integrated
              </label>
            </li>
            <li>
              <input name="form" type="radio" id="3" value="Van"></input>
              <label className={css.filtersLabels} htmlFor="3">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/sprite.svg#icon-grid_3x3"></use>
                </svg>
                Van
              </label>
            </li>
          </ul>
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
