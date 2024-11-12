import { NavLink } from "react-router-dom";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>Maverics</h2>
        <div className={css.reviews}>
          <svg width="16" height="16">
            <use href="../../../public/images/icons/sprite.svg#icon-star_yellow"></use>
          </svg>
          <p className={css.descReviews}>4.4(2 Reviews)</p>
          <svg width="16" height="16">
            <use href="../../../public/images/icons/sprite.svg#icon-map"></use>
          </svg>
          <p className={css.descLocation}>Kyiv, Ukraine</p>
        </div>
        <h2 className={css.amount}>$8000.00</h2>
      </div>
      <div className={css.container}>
        <img
          src="../../../public/images/details/InteriorCar-1_desk.jpg"
          alt="Interior Car"
        />
        <img
          src="../../../public/images/details/InteriorCar-2_desk.jpg"
          alt="Interior Car"
        />
        <img
          src="../../../public/images/details/InteriorCar-3_desk.jpg"
          alt="Interior Car"
        />
        <img
          src="../../../public/images/details/InteriorCar-4_desk.jpg"
          alt="Interior Car"
        />
      </div>
      <p className={css.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads.
        <br /> This no-frills yet reliable panel truck offers the essentials for
        a comfortable journey, making it the perfect companion for those who
        value simplicity and functionality.
      </p>
      <div className={css.listNavLinks}>
        <NavLink to="features" className={css.link}>
          Features
        </NavLink>
        <NavLink to="reviews" className={css.link}>
          Reviews
        </NavLink>
      </div>
    </>
  );
}
