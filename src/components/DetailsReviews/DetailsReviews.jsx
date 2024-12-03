import BookingForm from "../BookingForm/BookingForm";
import ButtonStar from "../ButtonStar/ButtonStar";
import css from "./DetailsReviews.module.css";

export default function DetailsReviews() {
  return (
    <>
      <div className={css.wrapperReviews}>
        <div className={css.person}>
          <div className={css.heading}>
            <div className={css.avatar}>A</div>
            <div className={css.rating}>
              <h3 className={css.name}>Alice</h3>
              <div className={css.buttons}>
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
              </div>
            </div>
          </div>
          <p className={css.descReviews}>
            The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to
            drive, and had all the essentials. The kitchen facilities were sufficient, and the
            overall experience was fantastic.
          </p>
        </div>
        <div className={css.person}>
          <div className={css.heading}>
            <div className={css.avatar}>B</div>
            <div className={css.rating}>
              <h3 className={css.name}>Bob</h3>
              <div className={css.buttons}>
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
                <ButtonStar />
              </div>
            </div>
          </div>
          <p className={css.descReviews}>
            A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack
            of bathroom facilities was a drawback. Good for short trips where simplicity is
            preferred.
          </p>
        </div>
      </div>
      <BookingForm />
    </>
  );
}
