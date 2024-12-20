import BookingForm from "../BookingForm/BookingForm";
import css from "./DetailsFeatures.module.css";

export default function DetailsFeatures() {
  return (
    <>
      <div className={css.wrapperFeatures}>
        <div className={css.badgesContainer}>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/collection.svg#icon-automatic"></use>
            </svg>
            <p className={css.descFeatures}>Automatic</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/collection.svg#icon-AC"></use>
            </svg>
            <p className={css.descFeatures}>AC</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/collection.svg#icon-fuel-pump"></use>
            </svg>
            <p className={css.descFeatures}>Petrol</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/collection.svg#icon-cup-hot"></use>
            </svg>
            <p className={css.descFeatures}>Kitchen</p>
          </div>
          <div className={css.list}>
            <svg width="16" height="16">
              <use href="/images/icons/collection.svg#icon-ui-radios"></use>
            </svg>
            <p className={css.descFeatures}>Radio</p>
          </div>
        </div>
        <h3 className={css.titleFeatures}>Vehicle details</h3>
      </div>
      <BookingForm />
    </>
  );
}
