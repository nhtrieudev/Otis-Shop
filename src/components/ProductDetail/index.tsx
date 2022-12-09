import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import Information from "./Information";

function ProductDetail() {
  let [name, setName] = useState([]);
  let [img, setImg] = useState([]);
  let [colors, setColors] = useState([]);
  let [price, setPrice] = useState([]);
  let [sizes, setSizes] = useState([]);
  let [desc, setDesc] = useState([]);
  let [id, setId] = useState("");
  let { nameProd } = useParams();

  useEffect(() => {
    getProdCate();
  }, [nameProd]);

  const getProdCate = async () => {
    let products: any = [];
    await getDocs(collection(db, "products"))
      .then((data: any) => {
        data.docs.forEach((doc: any) => {
          products.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
    products?.map((product: any) => {
      if (product.name === nameProd) {
        setName(product.name);
        setImg(product.img);
        setId(product.id);
        setPrice(product.price);
        setColors(product.colors);
        setSizes(product.sizes);
        setDesc(product.description);
      }
    });
  };
  return (
    <>
      <div className="detail">
        <div className="product-detail">
          <div className="product-detail__img">
            <img className="product-detail__img-main" src={img[0]} alt="" />
            <ul className="product-detail__img-list">
              {img?.map((img: any, index: any) => (
                <li className="product-detail__img-list--item" key={index}>
                  <img src={img} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <Information
            name={name}
            id={id}
            img={img}
            sizes={sizes}
            colors={colors}
            desc={desc}
            price={price}
          />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
