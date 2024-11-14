import { Suspense } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense
        fallback={
          <>
            <Loader size={20} /> Wait for the trucks search
          </>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
