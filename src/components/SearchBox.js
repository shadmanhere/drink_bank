import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from "../context";
import { Link } from 'react-router-dom'

export default class SearchBox extends Component {

  render() {
    return (
      <SearchWrapper className="row">
        <ProductConsumer>
          {
            value => (
              <div className="col-12 col-md-10 col-lg-8 mx-auto my-0 text-center text-title">
                <form
                  onSubmit={value.searchBox}>
                  <div className="form-group">
                    <label htmlFor="srch">Find your favourite drink here</label>
                    <input type="text" placeholder="search for the beer here" className="form-control" name="searchbox" id="srch" />
                  </div>
                </form>
                <Link to="/advancedsearch" className="nav-link">
                  Advanced Search
                </Link>
              </div>
            )
          }
          </ProductConsumer>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  background:var(--mainOrange);
  color:var(--mainWhite);
`