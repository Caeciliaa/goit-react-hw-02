import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.container}>
      <h1 className={css.AppTitlle}>Sip Happens Café</h1>
      <p className={css.AppText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
