import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from "../../context";

export default class AdvancedSearchHead extends Component {
  render() {
    return (
        <HeadWrapper className="col-12 mx-auto my-5 py-2 text-center text-title">
        <ProductConsumer>
            { value => (
               <div className="">
                 <h1>Advanced Search</h1>
               
               <form onSubmit={value.advancedSearch}>
                <div className="row">
                    <div className="col-12 col-md-3 form-group">
                        <label htmlFor="maxibu">Max IBU: </label>
                        <input type="text" className="form-control" name="maxibu" id="maxibu"/>
                    </div>
                    <div className="col-12 col-md-3 form-group">
                        <label htmlFor="minibu">Min IBU: </label>
                        <input type="text" className="form-control" name="minibu" id="minibu"/>
                    </div>
                    <div className="col-12 col-md-3 form-group">
                        <label htmlFor="maxabv">Max ABV: </label>
                        <input type="text" className="form-control" name="maxabv" id="maxabv"/>
                    </div>
                    <div className="col-12 col-md-3 form-group">
                        <label htmlFor="minabv">Min ABV: </label>
                        <input type="text" className="form-control" name="minabv" id="minabv"/>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-3 form-group">
                    <label htmlFor="maxebc">Max EBC: </label>
                    <input type="text" className="form-control" name="maxebc" id="maxebc"/>
                </div>
                <div className="col-12 col-md-3 form-group">
                    <label htmlFor="minebc">Min EBC: </label>
                    <input type="text" className="form-control" name="minebc" id="minebc"/>
                </div>


                <div className="col-12 col-md-3 form-group">
                    <label htmlFor="brewed_before">Brewed before: </label>
                    <input type="date" className="form-control" name="brewed_before" id="brewed_before"/>
                </div>
                <div className="col-12 col-md-3 form-group">
                    <label htmlFor="brewed_after">Brewed after: </label>
                    <input type="date" className="form-control" name="brewed_after" id="brewed_after"/>
                </div>
                </div>
            
                <button type="submit" className="btn btn-success">Search</button>
               
          </form> </div>
                )
            }
            
          </ProductConsumer>
        </HeadWrapper>
    )
  }
}

const HeadWrapper = styled.div`
  background:var(--mainOrange);
  color:var(--mainWhite);
`