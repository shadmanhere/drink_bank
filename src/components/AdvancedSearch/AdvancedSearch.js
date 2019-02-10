import React, { Component } from 'react'
import AdvancedSearchHead from './AdvancedSearchHead';
import Product from "../Product";
import { ProductConsumer } from "../../context";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class AdvancedSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <AdvancedSearchHead />
        <div className="py-0">
          <div className="container">
            {/* <div className="row"> */}
              <ProductConsumer>
                {value => (
                  <InfiniteScroll
                    dataLength={value.products.length}
                    next={value.fetchMoreAdvancedSearchData}
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
            {/* </div> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

