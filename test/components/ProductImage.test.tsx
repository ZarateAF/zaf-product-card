import React from "react";
import renderer from "react-test-renderer";
import { ProductImage } from "../../src/components";
import { ProductCard } from "../../src/components/ProductCard";
import { product2 } from "../data/products";

describe('ProductImage', () => {
    test('should display the component successful', () => {
        const wrapper = renderer.create(
            <ProductImage img="./image/none.png" className="custom-class" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should show a component with product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();        
    })
})