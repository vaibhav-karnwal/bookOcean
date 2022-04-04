import React from "react";
import data from "./../data/product.json";

export let productList = [];
export let productId = "";
export let productCategoryId = "";
export function setfilteredProductName(name) {
  productList =
    name === ""
      ? data.filter((product) => product)
      : data.filter((product) => product.title === name);
}

export const getProductList = () => {
  return productList;
};

export function setProductId(id) {
  productId = id;
}

export const getProductId = () => {
  return productId;
};

export function setProductCategoryId(id) {
  productCategoryId = id;
}

export const getProductCategoryId = () => {
  return productCategoryId;
};
