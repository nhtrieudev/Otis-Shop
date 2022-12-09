import Product from "./product";

function Order() {
  return (
    <>
      <div className="order box">
        <div className="order-container">
          <h1 className="order-container--heading">Đơn hàng của bạn</h1>
          <ul className="order-container__list box">
            <Product />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Order;
