import styles from "./Catalog.module.css";
export const List = () => (
  <div className={styles.catalogList}>
    {products.map(({ src, title, price, discount, id, rate, amount }) => (
      <Card
        src={src}
        title={title}
        price={price}
        discount={discount}
        rate={rate}
        amount={amount}
        key={id}
      />
    ))}
  </div>
);
