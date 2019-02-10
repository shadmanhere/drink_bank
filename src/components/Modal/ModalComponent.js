import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from "styled-components";
import MightLikeProducts from "./MightLikeProducts";


export default class ModalComponent extends Component {
  render() {
    return (
      <ProductConsumer>
        { value => {
            const { modalOpen } = value;
            const { image_url, name, tagline, abv, ibu, ebc, food_pairing, description, ingredients } = value.modalProduct;
              return (
                <ModalContainer>
                  <Modal 
                    isOpen={modalOpen} 
                    className=""
                    size="lg"
                    id="myModal"
                    toggle={() => {
                      value.closeModal();
                    }}
                    backdrop={true}
                    role="dialog">
                  <ModalHeader
                    toggle = {() => {
                      value.closeModal();
                    }}>
                  </ModalHeader>
                  <ModalBody>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-10  col-md-3">
                            <img src={image_url} className="img-fluid" alt="product"></img>
                          </div>
                          {/* {prduct text} */}
                          <div className="col-10 mx-1 col-md-8 my-3 text-capitalize">
                            <h2 className="text-orange font-weight-bold mt-3 mb-2">
                              {name}
                            </h2>
                            <h5 className="text-muted ">
                                {tagline}
                            </h5>
                            <hr />
                            <div className="row">
                              <div className="col-10 col-md-3">
                                <span className="row">
                                  <span className="text-uppercase font-weight-bold ml-0 col-5">ibu: </span>
                                  <span className="col-5">{ibu}</span>
                                </span>
                              </div>
                              <div className="col-10 col-md-3">
                                <span className="row">
                                  <span className="text-uppercase font-weight-bold ml-0 col-5">abv: </span>
                                  <span className="col-5">{abv}</span>
                                </span>
                              </div>
                              <div className="col-10 col-md-3">
                                <span className="row">
                                  <span className="text-uppercase font-weight-bold ml-0 col-5">ebc: </span>
                                  <span className="col-5">{ebc}</span>
                                </span>
                              </div>
                            </div>
                            <p className="text-muted py-3 my-3">
                              {description}
                            </p>
                            <h6 className="font-weight-bold">Best served with:</h6>
                            <ul>
                              {food_pairing?(<p className="test-capitalize mb-0" disabled>
                                {food_pairing.map((answer, i) => {                         
                                    return (<li key={i}>{answer}</li>) 
                                })}
                              </p>):(<p></p>)}
                            </ul>
                          </div>
                        </div>
                        
                      </div>
                      {ingredients?(<MightLikeProducts hops={ingredients.hops} />):(<p></p>)}
                    </ModalBody>
                  </Modal>
                </ModalContainer>
              )
            }
        }
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
hr{
  width:5%;
  color:purple;
}
`
