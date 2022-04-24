import styles from "./Card.module.css";
import { ProductsInCart } from "./ProductsInCart";
import { Rating } from "./Rating";
export default function Card({ src, title, price, discount, rate, amount }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={src} alt="product" />
        <div className={styles.favorite}>♡</div>
        <div className={styles.discount}>-{discount}%</div>
        <ProductsInCart style={styles.productsInCart} amount={amount} />
      </div>
      <div className={styles.card__info}>
        <div className={styles.price}>
          <div className={styles.price__disc}>
            <h3>
              {price[0]},{price[1]} р
            </h3>
            <p>С картой</p>
          </div>
          <div className={styles.price__noDisc}>
            <h3>
              {price[0]},{price[1]} р
            </h3>
            <p>Обычная</p>
          </div>
        </div>
        <h3 className={styles.card__title}>{title}</h3>
        <Rating style={styles.rate} rate={rate} />
        <button className={styles.addToCartBtn}>В корзину</button>
      </div>
    </div>
  );
}
