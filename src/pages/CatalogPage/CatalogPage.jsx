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

          <div className={css.geoLocation}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-map"></use>
            </svg>
            Kyiv, Ukraine
          </div>
        </div>
        <h3 className={css.filters}>Filters</h3>
        <div className={css.equipment}>
          <h3 className={css.titleEquipment}>Vehicle equipment</h3>
          <ul className={css.filtersContainer}>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="1"
                value="AC"
              />
              <label className={css.filtersLabels} htmlFor="1">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="images/icons/sprite.svg#icon-AC"></use>
                </svg>
                AC
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="2"
                value="Automatic"
              />
              <label className={css.filtersLabels} htmlFor="2">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="images/icons/sprite.svg#icon-automatic"></use>
                </svg>
                Automatic
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="3"
                value="Bathroom"
              />
              <label className={css.filtersLabels} htmlFor="3">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="images/icons/sprite.svg#icon-bathroom"></use>
                </svg>
                Bathroom
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="4"
                value="Gas"
              />
              <label className={css.filtersLabels} htmlFor="4">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-hugeicons_gas-stove"></use>
                </svg>
                Gas
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="5"
                value="Cup hot"
              />
              <label className={css.filtersLabels} htmlFor="5">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="images/icons/collection.svg#icon-cup-hot"></use>
                </svg>
                Kitchen
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="6"
                value="Microwave"
              />
              <label className={css.filtersLabels} htmlFor="6">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-lucide_microwave"></use>
                </svg>
                Microwave
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="7"
                value="Petrol"
              />
              <label className={css.filtersLabels} htmlFor="7">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-fuel-pump"></use>
                </svg>
                Petrol
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="8"
                value="Radio"
              />
              <label className={css.filtersLabels} htmlFor="8">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-ui-radios"></use>
                </svg>
                Radio
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="9"
                value="Refrigerator"
              />
              <label className={css.filtersLabels} htmlFor="9">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/public/images/icons/collection.svg#icon-solar_fridge-outline"></use>
                </svg>
                Refrigerator
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="10"
                value="TV"
              />
              <label className={css.filtersLabels} htmlFor="10">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-tv"></use>
                </svg>
                TV
              </label>
            </li>
            <li className={css.filtersCheckBoxes}>
              <input
                className={css.visuallyHidden}
                type="checkbox"
                name="vehicleEquipment"
                id="11"
                value="Water"
              />
              <label className={css.filtersLabels} htmlFor="11">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-ion_water-outline"></use>
                </svg>
                Water
              </label>
            </li>
          </ul>
        </div>
        <div className={css.type}>
          <h3 className={css.titleEquipment}>Vehicle type</h3>
          <ul className={css.filtersContainer}>
            <li>
              <input
                className={css.visuallyHidden}
                type="radio"
                name="vehicleType"
                id="12"
                value="Van"
              />
              <label className={css.filtersLabels} htmlFor="12">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-bi_grid-1x2"></use>
                </svg>
                Van
              </label>
            </li>
            <li>
              <input
                className={css.visuallyHidden}
                type="radio"
                name="vehicleType"
                id="13"
                value="Fully Integrated"
              />
              <label className={css.filtersLabels} htmlFor="13">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-bi_grid"></use>
                </svg>
                Fully Integrated
              </label>
            </li>
            <li>
              <input
                className={css.visuallyHidden}
                type="radio"
                name="vehicleType"
                id="14"
                value="Alcove"
              />
              <label className={css.filtersLabels} htmlFor="14">
                <svg
                  className={css.icon}
                  color="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use href="/images/icons/collection.svg#icon-grid-3x3"></use>
                </svg>
                Alcove
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
                <use href="/images/icons/collection.svg#icon-star"></use>
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
