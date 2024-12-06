import { useEffect, useState, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from "./CamperDetailsPage.module.css";

import DetailsFeatures from "../../components/DetailsFeatures/DetailsFeatures";
// import DetailsReviews from "../../components/DetailsReviews/DetailsReviews";
import Loader from "../../components/Loader/Loader";

export default function CamperDetailsPage() {
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

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>Maverics</h2>
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
        <h2 className={css.amount}>€8000.00</h2>
      </div>
      <div className={css.images}>
        <img src="/images/details/InteriorCar-1_desk.jpg" alt="Interior Car" />
        <img src="/images/details/InteriorCar-2_desk.jpg" alt="Interior Car" />
        <img src="/images/details/InteriorCar-3_desk.jpg" alt="Interior Car" />
        <img src="/images/details/InteriorCar-4_desk.jpg" alt="Interior Car" />
      </div>
      <p className={css.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo
        travelers or couples seeking a compact and efficient way to explore the open roads. <br />
        This no-frills yet reliable panel truck offers the essentials for a comfortable journey,
        making it the perfect companion for those who value simplicity and functionality.
      </p>
      <nav className={css.navigation}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <DetailsFeatures />
        {/* <DetailsReviews /> */}
      </nav>
    </>
  );
}
