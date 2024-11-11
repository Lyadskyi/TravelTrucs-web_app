import DetailsFeatures from "../../components/DetailsFeatures/DetailsFeatures";

import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  return (
    <>
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
      <DetailsFeatures />
    </>
  );
}
