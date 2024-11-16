import BookingForm from "../BookingForm/BookingForm";

import css from "./DetailsFeatures.module.css";

export default function DetailsFeatures() {
  return (
    <>
      <div className={css.wrapperDetails}>
        <div className={css.badgesContainer}>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-automatic"></use>
            </svg>
            <p className={css.descDetails}>Automatic</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-AC"></use>
            </svg>
            <p className={css.descDetails}>AC</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-petrol"></use>
            </svg>
            <p className={css.descDetails}>Petrol</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-kitchen"></use>
            </svg>
            <p className={css.descDetails}>Kitchen</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/sprite.svg#icon-radio"></use>
            </svg>
            <p className={css.descDetails}>Radio</p>
          </div>
        </div>
        <h3 className={css.titleDetails}>Vehicle details</h3>
      </div>
      <BookingForm />
    </>
  );
}
