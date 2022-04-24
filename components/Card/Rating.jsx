export const Rating = ({ style, rate }) => {
  const RateList = () => {
    var rateList = [];
    for (let i = 0; i < 5; i++) {
      rateList.push(i < rate ? "filled" : "unfilled");
    }
    return (
      <div className={style}>
        {rateList.map((isFilled) => (
          <img src={`/img/${isFilled}Star.png`} alt="star" />
        ))}
      </div>
    );
  };

  return <RateList />;
};
