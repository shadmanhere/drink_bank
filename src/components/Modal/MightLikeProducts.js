import React, { Component } from 'react'
import Product from "./MightLikeProduct";
import styled from 'styled-components'

export default class ProductList extends Component {
  

    state = {
        products: [],
    }
    
    setProducts = (data) => {
      let tempProducts = [];
      data.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem]
      })
      this.setState(()=>{
        return {products:tempProducts}
      })
    }
    
    getProducts = async() => {
      const hops=this.props.hops[0].name
      const api_call = await fetch(`https://api.punkapi.com/v2/beers?hops=${hops}&page=1&per_page=3`);
      const data = await api_call.json();
      this.setProducts(data);
    }
    
    componentDidMount(){
      this.getProducts();   
    }

  render() {
    return (
      <ProductsWrapper>
        <div className="py-3 mt-3">
          <div className="container">
          <h3>You might also like:</h3>
                {this.state.products[0]?(<div className="row">
                  {
                    this.state.products.map( product => {                         
                    return (<Product key={product.id} product={product} />) 
                })}
               </div>):(<p></p>)}
          </div>
        </div>
      </ProductsWrapper>
    )
  }
}

const ProductsWrapper = styled.div`
.container h3{
    color:var(--mainOrange);
}
`