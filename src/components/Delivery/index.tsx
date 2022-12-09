import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import React, { useRef, useState } from "react";
import { addOrder } from "../../redux/reducers/orderReducer";
import Product from "./Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeAll } from "../../redux/reducers/cartReducer";
import formatter from "../format-currency";

function Delivery() {
  let ref: any = useRef();
  let products = useAppSelector((state) => state.cart.products);
  let navigate = useNavigate();
  let dispatch = useAppDispatch();
  let [fullname, setFullname] = useState("");
  let [phone, setPhone] = useState("");
  let [street, setStreet] = useState("");
  let [district, setDistrict] = useState("");
  let [city, setCity] = useState("");
  let [note, setNote] = useState("");

  let PHONE_REGEX = new RegExp("/((09|03|07|08|05)+([0-9]{8})\b)/g");

  let handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!PHONE_REGEX.test(phone)) {
      if (fullname.length > 16) {
        if (street.length > 16) {
          if (district.length > 1) {
            if (city.length > 2) {
              products?.map((product: any) => {
                dispatch(addOrder(product));
              });
              dispatch(removeAll([]));
              toast.success("Xác nhận thành công");
              navigate("/user/order");
            } else {
              toast.error("Vui lòng điền đầy đủ tên tên thành phố.");
            }
          } else {
            toast.error("Vui lòng điền đầy đủ tên tên quận.");
          }
        } else {
          toast.error("Vui lòng điền đầy đủ tên tên đường.");
        }
      } else {
        toast.error("Vui lòng điền đầy đủ họ tên người nhận.");
      }
    } else {
      toast.error("Số điện thoại sai cú pháp.");
    }
  };

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      fullname === "" ||
      phone === "" ||
      street === "" ||
      city === "" ||
      district === ""
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
    } else {
      products?.map((product: any) => {
        dispatch(addOrder(product));
      });
      dispatch(removeAll([]));
      toast.success("Xác nhận thành công");
      navigate("/user/order");
    }
  };

  return (
    <>
      <div className="delivery-container">
        <h1 className="delivery-container-heading">Chi tiết thanh toán</h1>
        <div className="delivery">
          <form action="" onSubmit={handleSubmitForm} className="box form-info">
            <h2 className="form-info--heading">Địa chỉ giao hàng</h2>
            <div className="form-info__item">
              <label className="form-info__item-name">Tên người nhận :</label>
              <input
                ref={ref}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Nguyễn Văn A..."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info__item">
              <label className="form-info__item-name">Số điện thoại :</label>
              <input
                ref={ref}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="037...."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info__item">
              <label className="form-info__item-name">Đường :</label>
              <input
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Đường..."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info__item">
              <label className="form-info__item-name">Phường :</label>
              <input
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Phường..."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info__item">
              <label className="form-info__item-name">Thành phố :</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                placeholder="Hồ Chí Minh..."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info__item">
              <label className="form-info__item-name">Mô tả :</label>
              <input
                onChange={(e) => setNote(e.target.value)}
                placeholder="Mô tả..."
                type="text"
                className="form-info__item-input"
              />
            </div>
            <div className="form-info-confirm">
              <button type="submit" className="form-info-confirm--btn">
                Xác nhận
              </button>
            </div>
          </form>
          <div className="box delivery-summary">
            <h2 className="delivery-summary--heading">Tóm tắt thanh toán</h2>
            <div className="delivery-summary__subtotal">
              <p className="delivery-summary__subtotal-text">Tổng thu :</p>
              <span className="delivery-summary__subtotal-number">
                {formatter.format(
                  products.reduce(
                    (a: any, b: any) => a + b.quantity * b.price,
                    0
                  )
                )}
              </span>
            </div>
            <ul className="delivery-summary__list">
              <Product />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
