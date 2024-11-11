import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <>
      <div className={css.location}>
        <h3 className={css.titleLocation}>Location</h3>
        <div className={css.geoLocation}>Kyiv, Ukraine</div>
      </div>
      <h3 className={css.filters}>Filters</h3>
      <div className={css.equipment}>
        <h2 className={css.titleEquipment}>Vehicle equipment</h2>
      </div>
      <button className={css.btn}>Search</button>
    </>
  );
}
