import React, { useEffect, useState } from "react";
import ProductsItem from "@Components/ProductsItem";
import "../assets/less/products.less";
import "../assets/less/productsItem.less";
import Search from "./Search";

function Products({ title, children }) {
  const [products, setProducts] = useState();
  const [productsSort, setProductsSort] = useState();

  const onDeleteProduct = (id) => {
    const newData = products.filter((p) => p.id !== id);
    setProducts(newData);
    setProductsSort(newData);
  };

  const onSearchProduct = (value) => {
    if (value) setProductsSort(
      products.filter((p) => {
        return p.title.toLowerCase().includes(value.toLowerCase());
      })
    );
    else  setProductsSort(products)
  };

  const onUpdateProduct = (item) => {
    console.log("onUpdate:", item);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then(({ products }) => {
        console.log("productL:", products);
        if (products) {
          setProducts(products);
          setProductsSort(products);
        }
      });
  }, []);

  return (
    <>
      <div className="flex mb-4 w-full justify-between items-center">
        <div className="search-product">
          <h2>Tìm sản phẩm</h2>
          <Search onSearching={onSearchProduct} placeholder={'Nhập tên sản phẩm'}/>
        </div>
        <span>số lượng: {products?.length || 0}</span>
      </div>
      <div className="products">
        {productsSort
          ? productsSort.map((product) => (
              <ProductsItem
                item={product}
                key={product?.id}
                onDelete={onDeleteProduct}
                onUpdate={onUpdateProduct}
              />
            ))
          : "Loading...."}
      </div>
    </>
  );
}
export default Products;
