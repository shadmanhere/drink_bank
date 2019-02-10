import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const {id, tagline, image_url, name, inFavourite } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
        <ProductConsumer>
          { value => (
            <div className="img-container text-center p-5" 
                onClick={() => {
                  value.handleDetail(id)
                  }}>
                <img src={image_url} alt="product" className="card-img-top" 
                  onClick = {() => {
                    value.openModal(id);
                  }}></img>
              <button className="Favourite-btn" 
              onClick = {() => {
                  value.addToFavourite(id);
                }}>
              {inFavourite?(<p className="test-capitalize mb-0" disabled>
                  {" "}
                  <i className="fas fa-star"></i>
                </p>):(<i className="far fa-star"></i>)}
              </button>
            </div>
          )}
          
          </ProductConsumer>
          {/* Card footer */}
          <div className="card-footer text-center">
            <h6 className="mb-0">
            {name}
            </h6>
            <p className="text-grey mb-0">
              <span className="mr-1 text-muted">
              {tagline}
              </span>
            </p>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  .card-footer h6{
    color:var(--mainOrange);
  }
  .card{
    border-color:transparent;
    transition:all 1s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    overflow:hidden;
  }
  &:hover{
    .card{
      border:0.04rem solid rgba(0,0,0.2);
      box-shadow:2px 2px 5px 0px rgba(0,0,0.2)
    }
    .card-footer{
      background:rgba(247,247,247);
    }
  }
  
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .card-img-top{
    width: 25%;
    height: 20vw;
    object-fit: cover;
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top{
    transform:scale(1.2);
  }
  .Favourite-btn{
    position: absolute;
    top:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:transparent;
    border:none;
    font-size:1.4rem;
  }
  .img-container:hover .Favourite-btn{
    transform: translate(0,0);
  }
  .Favourite-btn:hover{
    color:var(--mainBlue);
    cursor: pointer;
    color:var(--mainOrange);
  }
  .fas.fa-star{
    color:var(--mainOrange);
  }
  .far.fa-star{
    border:black;
  }
`