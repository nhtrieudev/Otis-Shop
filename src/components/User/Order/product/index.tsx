import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { removeOrder } from "../../../../redux/reducers/orderReducer";

function Product() {
  let dispatch = useAppDispatch();
  let products = useAppSelector((state) => state.order.products);
  return (
    <>
      {products?.map((product: any, index: number) => (
        <li className="order-container__list--item box" key={index}>
          <div className="order-container__list--item-product">
            <div className="order-container__list--item-product-thumb">
              <img src={product.img} alt="" />
            </div>
            <div className="order-container__list--item-product-detail">
              <p className="order-container__list--item-product-detail-name">
                {product.name}
              </p>
              <div className="order-container__list--item-product-detail-type">
                <div
                  className="color"
                  style={{ backgroundColor: `${product.color}` }}
                ></div>
                <span className="devided">/</span>
                <span className="size">{product.size}</span>
              </div>
              <p className="order-container__list--item-product-detail-quantity">
                Số lượng: <span className="quantity">{product.quantity}</span>
              </p>
              <p className="order-container__list--item-product-detail-total">
                Thành tiền:{" "}
                <span className="total">
                  {product.price * product.quantity}₫
                </span>
              </p>
            </div>
          </div>
          <div className="order-container__list--item-status">
            <span>Đang vận chuyển</span>
          </div>
          <div className="order-container__list--item-cancel">
            <button
              onClick={() => dispatch(removeOrder(product.id))}
              className="order-container__list--item-detail-cancel--btn"
            >
              Hủy đơn
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default Product;
