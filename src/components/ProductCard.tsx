import React, { createContext, CSSProperties } from "react";
import useProduct from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  Product,
  onChangeArgs,
  ProductContextProps,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/ProductInterfaces";

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  initialValues,
  onChange,
  
}: Props) => {
  const { counter, maxCount, isMaxCountReached, reset, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
