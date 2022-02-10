import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  title?: string;
  className?: string
  style?: CSSProperties,
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let textToShow = title ? title : product.title;
  return <span className={`${styles.productDescription} ${className}`} style={style}> {textToShow} </span>;
};
