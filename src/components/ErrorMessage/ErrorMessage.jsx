import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <p>Sorry, an error occurred! Please reload the page...</p>
    </div>
  );
}
