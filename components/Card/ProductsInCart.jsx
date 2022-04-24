export const ProductsInCart = ({ style, amount }) => {
  return (
    <>
      {amount != 0 && (
        <div className={style}>
          <img src="/img/shopping-cart.png" alt="Products in cart" />
          <p>{amount}</p>
        </div>
      )}
    </>
  );
};
