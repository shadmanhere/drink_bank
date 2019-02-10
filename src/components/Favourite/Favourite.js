import React, { Component } from 'react'
import EmptyFavourite from "./EmptyFavourite";
import { ProductConsumer } from "../../context";
import FavouriteList from "./FavouriteList";

export default class Favourite extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {Favourite} = value;
            if(Favourite.length > 0){
              return(
                <React.Fragment>
                  <div className="col-10 mx-auto my-5 py-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold">
                    Your Favourites
                    </h1>
                  </div>
                  <FavouriteList value={value} />
                </React.Fragment>
              )
            } else {
              return (
                <EmptyFavourite />
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
