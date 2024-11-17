import BookingForm from "../BookingForm/BookingForm";
import css from "./DetailsReviews.module.css";

export default function DetailsFeatures() {
  return (
    <>
      <div className={css.wrapperDetails}>
        <div className={css.reviewsContainer}>
          <p>
            The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to
            drive, and had all the essentials. The kitchen facilities were sufficient, and the
            overall experience was fantastic.
          </p>
        </div>
      </div>

      <BookingForm />
    </>
  );
}
