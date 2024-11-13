import css from "./DetailsFeatures.module.css";

export default function DetailsFeatures() {
  return (
    <>
      <div className={css.features}>
        <ul>
          <li>Automatic</li>
          <li>AC</li>
          <li>Petrol</li>
          <li>Kitchen</li>
          <li>Radio</li>
        </ul>
      </div>
    </>
  );
}
