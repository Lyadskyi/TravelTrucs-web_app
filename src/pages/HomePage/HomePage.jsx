import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.appBackground}>
        <div className={css.description}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <button className={css.btn}>View Now</button>
        </div>
      </div>
    </>
  );
}
