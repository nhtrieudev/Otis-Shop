import { useState } from "react";

function ImageDetail(props: any) {
  let [img, setImg] = useState("");

  let getUrlImg = (url: string) => {
    setImg(url);
  };
  return (
    <>
      <div className="product-detail__img">
        <img
          className="product-detail__img-main"
          src={img || props.img}
          alt=""
        />
        <ul className="product-detail__img-list">
          {props.img?.map((url: any, index: any) => (
            <li className="product-detail__img-list--item" key={index}>
              <img src={url} onClick={() => getUrlImg(url)} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ImageDetail;
