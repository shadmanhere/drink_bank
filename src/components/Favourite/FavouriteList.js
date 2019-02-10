import React from 'react'
import Product from "../Product";
import { ProductConsumer } from "../../context";

export default function FavouriteList() {
  return (
    <React.Fragment>
        <div className="py-0">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.Favourite.map( product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
  )
}
