import React from "react";
import renderer from "react-test-renderer";
import { ProductCard } from "../../src/components";
// import { ProductCard } from "../../src/components/ProductCard";
import { product1 } from "../data/products";

const { act } = renderer;

describe('ProductCard', () => {

    test('should show a component with a child', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1> Hellow world</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();        
    })

    test('should increase a counter', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)} />
                        </>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON()      
        expect( tree ).toMatchSnapshot();
        act(() => {
            (tree as any).children[2].props.onClick();
        })
        tree = wrapper.toJSON()
        expect( (tree as any).children[1].children[0]).toBe('1')
        console.log(tree)
    })
    
})