import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import ProductBox from "../ProductBox";

function ProductHome() {
  let [tshirt, setTshirt] = useState([]);
  let [polo, setPolo] = useState([]);
  let [sweater, setSweater] = useState([]);
  let [hoodie, setHoodie] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getProdCate();
  }, []);

  let getProdCate = async () => {
    const products: any = [];
    await getDocs(collection(db, "products"))
      .then((data) => {
        data.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    let prodT = products.filter((product: any) => product.type === "tshirt");
    setTshirt(prodT);
    let prodP = products.filter((product: any) => product.type === "polo");
    setPolo(prodP);
    let prodS = products.filter((product: any) => product.type === "sweater");
    setSweater(prodS);
    let prodH = products.filter((product: any) => product.type === "hoodie");
    setHoodie(prodH);
  };

  return (
    <>
      <div className="product-home">
        <div className="product-home-container">
          <h1 className="product-home-container--heading">Polo</h1>
          <div className="product-home-container__item">
            <ProductBox propProd={polo} />
          </div>
          <div className="product-home-container--view-more">
            <button
              onClick={() => navigate("/category")}
              className="button button-animation"
            >
              Xem thêm
            </button>
          </div>
        </div>
        <div className="product-home-container">
          <h1 className="product-home-container--heading">Sweater</h1>
          <div className="product-home-container__item">
            <ProductBox propProd={sweater} />
          </div>
          <div className="product-home-container--view-more">
            <button
              onClick={() => navigate("/category")}
              className="button button-animation"
            >
              Xem thêm
            </button>
          </div>
        </div>
        <div className="product-home-container">
          <h1 className="product-home-container--heading">T-shirt</h1>
          <div className="product-home-container__item">
            <ProductBox propProd={tshirt} />
          </div>
          <div className="product-home-container--view-more">
            <button
              onClick={() => navigate("/category")}
              className="button button-animation"
            >
              Xem thêm
            </button>
          </div>
        </div>
        <div className="product-home-container">
          <h1 className="product-home-container--heading">Hoodie</h1>
          <div className="product-home-container__item">
            <ProductBox propProd={hoodie} />
          </div>
          <div className="product-home-container--view-more">
            <button
              onClick={() => navigate("/category")}
              className="button button-animation"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHome;
