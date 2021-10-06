// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
// Data
import products from "../products";

export default function ProductList() {
  const [query, setQuery] = useState("");

  // let filterdArray = products.filer(product => product.)

  // const productList = products
  //   .filter((product) => product.name.includes(query))
  //   .map((product) => <ProductItem product={product} key={product.id} />);

  const productList = products
    .filter((product) =>
      product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        setCookie={props.setCookie}
        key={product.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
}
