import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import ProductBox from "./Product";

function Category(props: any) {
  let [active, setActive] = useState(false);
  let [prods, setProds] = useState([]);
  let [prodAll, setProdAll] = useState([]);
  let [tshirt, setTshirt] = useState([]);
  let [polo, setPolo] = useState([]);
  let [sweater, setSweater] = useState([]);
  let [hoodie, setHoodie] = useState([]);
  useEffect(() => {
    getProdCate();
  }, []);

  let getProdCate = async () => {
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
    let prodA = products;
    setProdAll(prodA);
    setProds(prodA);
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
      <div className="category">
        <div className="category-container">
          <div className="category-menu-tb">
            <h2
              onClick={() => setActive(!active)}
              className="category-menu-tb--heading"
            >
              Loại sản phẩm
              <i className="category-menu-tb--heading-icon fa-solid fa-chevron-down"></i>
            </h2>
            <ul
              className={
                active
                  ? "category-menu-tb__list active"
                  : "category-menu-tb__list"
              }
            >
              <li
                onClick={() => setProds(polo)}
                className="category-menu-tb__list--item"
              >
                Polo
              </li>
              <li
                onClick={() => setProds(tshirt)}
                className="category-menu-tb__list--item"
              >
                T-Shirt
              </li>
              <li
                onClick={() => setProds(hoodie)}
                className="category-menu-tb__list--item"
              >
                Hoodie
              </li>
              <li
                onClick={() => setProds(sweater)}
                className="category-menu-tb__list--item"
              >
                Sweater
              </li>
              <li
                onClick={() => setProds(prodAll)}
                className="category-menu-tb__list--item"
              >
                Tất cả sản phẩm
              </li>
            </ul>
          </div>
          <div className="category-container__menu box">
            <h2 className="category-container__menu--heading">Loại sản phẩm</h2>
            <ul className="category-container__menu--list">
              <li
                onClick={() => setProds(polo)}
                className="category-container__menu--list-item"
              >
                Polo
              </li>
              <li
                onClick={() => setProds(tshirt)}
                className="category-container__menu--list-item"
              >
                T-Shirt
              </li>
              <li
                onClick={() => setProds(hoodie)}
                className="category-container__menu--list-item"
              >
                Hoodie
              </li>
              <li
                onClick={() => setProds(sweater)}
                className="category-container__menu--list-item"
              >
                Sweater
              </li>
              <li
                onClick={() => setProds(prodAll)}
                className="category-container__menu--list-item"
              >
                Tất cả sản phẩm
              </li>
            </ul>
          </div>
          <div className="category-container__product">
            <ProductBox propProd={prods} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
