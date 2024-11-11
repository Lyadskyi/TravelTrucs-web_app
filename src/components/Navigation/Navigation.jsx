import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.logo}>
        <img
          src="/Logo_TravelTrucks.png"
          alt="logo"
          className={css.logoImage}
        />
      </NavLink>
      <div className={css.navLinks}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}
