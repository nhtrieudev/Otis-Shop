import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { addCart } from "../../../redux/reducers/cartReducer";
import formatter from "../../format-currency";

function Information(props: any) {
  let nodeSize: any = useRef();
  let nodeColor: any = useRef();
  let [size, setSize] = useState("");
  let [color, setColor] = useState("");
  let [quantity, setQuantity] = useState(1);
  let dispatch = useAppDispatch();

  let userLogin = useAppSelector((state) => state.auth.isLoggIn);

  const handleAddCart = () => {
    if (color !== "") {
      if (size !== "") {
        if (props) {
          dispatch(
            addCart({
              name: props.name,
              id: props.id,
              img: props.img[0],
              price: props.price,
              size,
              color,
              quantity,
            })
          );
          console.log(props.id);
          toast.success("Thêm vào giỏ hàng thành công!");
        } else {
          toast.error("Thêm vào giỏ hàng thất bại!");
        }
      } else {
        toast.error("Vui lòng chọn size áo.");
      }
    } else {
      toast.error("Vui lòng chọn màu áo.");
    }
  };
  let activeSize = (index: any) => {
    let size: any = nodeSize.current.children;
    for (let i = 0; i < props.sizes.length; i++) {
      size[i].className = size[i].className.replace("size active", "size");
    }
    size[index].className = "size active";
  };
  let activeColor = (index: any) => {
    let color: any = nodeColor.current.children;
    for (let i = 0; i < props.colors.length; i++) {
      color[i].className = color[i].className.replace("color active", "color");
    }
    color[index].className = "color active";
  };

  let handleDecrease = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  let handleIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="product-detail__info box">
        <h1 className="product-detail__info--name">{props.name}</h1>
        <div className="product-detail__info--price">
          <span className="product-detail__info--price-number">
            {formatter.format(props.price)}
          </span>
        </div>
        <div className="product-detail__info--colors" ref={nodeColor}>
          {props.colors?.map((color: any, index: any) => (
            <div
              key={index}
              className="color"
              onClick={() => [activeColor(index), setColor(color)]}
              style={{ backgroundColor: `${color}` }}
            ></div>
          ))}
        </div>
        <div className="product-detail__info--sizes" ref={nodeSize}>
          {props.sizes?.map((size: any, index: any) => (
            <span
              key={index}
              onClick={() => [activeSize(index), setSize(size)]}
              className="size"
            >
              {size}
            </span>
          ))}
        </div>
        <div className="product-detail__info--quantity">
          <button
            onClick={handleDecrease}
            className="product-detail__info--quantity-btn"
          >
            -
          </button>
          <span className="product-detail__info--quantity-number">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="product-detail__info--quantity-btn"
          >
            +
          </button>
        </div>
        <div className="product-detail__info--add">
          <button
            onClick={handleAddCart}
            className="product-detail__info--add-btn button-animation"
          >
            Thêm vào giỏ
          </button>
        </div>
        <p className="product-detail__info--back">
          <Link to="/cateogry">
            <i className="fa-solid fa-hand-point-left"></i>Tiếp tục mua hàng
          </Link>
        </p>
        <div className="product-detail__info--desc">
          <h3 className="product-detail__info--desc-heading">Mô tả</h3>
          <p className="product-detail__info--desc-name">{props.name}</p>
          {props.desc?.map((desc: string, index: any) => (
            <p key={index} className="product-detail__info--desc-detail">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;
