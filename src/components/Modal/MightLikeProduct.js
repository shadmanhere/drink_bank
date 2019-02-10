import React, { Component } from 'react'
import styled from 'styled-components'

export default class MightLikeProduct extends Component {

  render() {
    const {image_url, name } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-4 my-3">
        <div className="card">
            <div className="img-container text-center">
                <img src={image_url} alt="product" className="card-img-top"></img>
            </div>
          
          {/* Card footer */}
          <div className="card-footer text-center">
            <h6 className="mb-0">
            {name}
            </h6>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  
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
  .img-container:hover{
    transform: translate(0,0);
`