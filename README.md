# ZAF-PRODUCT_CARD

### F Z

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "zaf-product-card";

```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
        }}
      >
        {
          ({
            count,
            isMaxCountReached,
            reset, 
            increaseBy

          }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
```