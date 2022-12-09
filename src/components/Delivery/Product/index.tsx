import { useAppSelector } from "../../../redux/hooks/hooks";

function Product() {
  let products = useAppSelector((state) => state.cart.products);
  return (
    <>
      {products?.map((product: any, index: any) => (
        <li className="delivery-summary__list-item" key={index}>
          <p className="delivery-summary__list-item--name">{product.name}</p>
          <div className="delivery-summary__list-item--detail">
            <div className="delivery-summary__list-item--detail-prod">
              <p className="delivery-summary__list-item--detail-prod-text">
                Số lượng: {product.quantity}
              </p>
              <div className="delivery-summary__list-item--detail-prod-text">
                <div
                  className="color"
                  style={{ backgroundColor: `${product.color}` }}
                ></div>
                <span className="devided">/</span>
                <span className="size">{product.size}</span>
              </div>
              <p className="delivery-summary__list-item--detail-prod-text">
                Tổng: {product.quantity * product.price}
              </p>
            </div>
            <div className="delivery-summary__list-item--detail-img">
              <img src={product.img} alt="" />
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default Product;
