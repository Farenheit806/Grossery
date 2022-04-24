import styles from "./Catalog.module.css";
import { List } from "./List";
export const Section = ({ header }) => {
  return (
    <section className="container">
      <div className={styles.sales}>
        <h1>{header}</h1>
        <List />
      </div>
    </section>
  );
};
