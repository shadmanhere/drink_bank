import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="py-0">
          <div className="container-fluid">
            <Title name="The Drink Bank"/>
          </div>
          <div className="container">
              <ProductConsumer>
                {value => (
                  <InfiniteScroll
                    dataLength={value.products.length}
                    next={value.fetchMoreData}
                    hasMore={value.hasmore}
                    loader={<h4>Loading...</h4>}
                    className="row"
                  >
                  { 
                    
                    value.products.filter(product => product.name.match(new RegExp(value.searchTerm, 'gmi'))).map( product => {
                        return <Product key={product.id} product={product} />
                    })
                  }
                  </InfiniteScroll>
                  )
                }
              </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

// {value => {
//   return value.products.map( product => {
//     return <Product key={product.id} product={product} />
//   })
// }}