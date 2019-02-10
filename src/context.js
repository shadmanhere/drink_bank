import React, { Component } from 'react'
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    Favourite:[],
    modalOpen:false,
    detailProduct:'',
    modalProduct:'',
    page:1,
    per_page:6,
    totalPages: 50,
    hasmore:true,
    searchTerm:'',
    advancedUrl:`https://api.punkapi.com/v2/beers?page=1&per_page=6`,
  }


  getProducts = async() => {
    const { page, per_page } = this.state
    const api_call = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`);
    const data = await api_call.json();
    this.setProducts(data);
  }

  advancedSearch = (event) => {
    event.preventDefault();
    const { page, per_page } = this.state
    const maxibu = event.target.maxibu.value;
    const minibu = event.target.minibu.value;
    const maxabv = event.target.maxabv.value;
    const minabv = event.target.minabv.value;
    const maxebc = event.target.maxebc.value;
    const minebc = event.target.minebc.value;
    const brewed_before = event.target.brewed_before.value;
    const brewed_after = event.target.brewed_after.value;
    let api_url = '';
    if(minibu){
      api_url = api_url + `&ibu_gt=${minibu}`
    }
    if(maxibu){
      api_url = api_url + `&ibu_lt=${maxibu}`
    }
    if(minabv){
      api_url = api_url + `&abv_gt=${minabv}`
    }
    if(maxabv){
      api_url = api_url + `&abv_lt=${maxabv}`
    }
    if(minebc){
      api_url = api_url + `&ebc_gt=${minebc}`
    }
    if(maxebc){
      api_url = api_url + `&ebc_lt=${maxebc}`
    }
    if(brewed_before){
      api_url = api_url + `&brewed_before=${brewed_before}`
    }
    if(brewed_after){
      api_url = api_url + `&brewed_after=${brewed_after}`
    }
    let finalUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}${api_url}`
    this.setState(()=>{
      return {advancedUrl:finalUrl};
    },() => {
      this.getAdvancedSearchData();
    })   
  }

  getAdvancedSearchData = async() => {
    const api_call = await fetch(this.state.advancedUrl);
    const data = await api_call.json();
    this.setFreshProducts(data);
  }

  fetchMoreAdvancedSearchData = async() => {
    this.setState(()=>{
      return {page:this.state.page + 1};
    })
    if(this.state.page > this.state.totalPages){
      this.setState(()=>{
        return {hasmore:false};
      })
    }
    const api_call = await fetch(this.state.advancedUrl);
    const data = await api_call.json();
    let tempProducts = [];
      data.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem]
    })
    this.setState(()=>{
      return {products:this.state.products.concat(tempProducts)}
    })
  }

  fetchMoreData = () => {
    this.setState(()=>{
      return {page:this.state.page + 1};
    })
    if(this.state.page > this.state.totalPages){
      this.setState(() => {
        return {hasmore:false};
      })
    }
    this.getProducts()
  }

  componentDidMount() {
    this.getProducts();
  }

  setProducts = (data) => {
    let tempProducts = [];
      data.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem]
    })
    this.setState(()=>{
      return {products:this.state.products.concat(tempProducts)}
    })
  }

  setFreshProducts = (data) => {
    let tempProducts = [];
      data.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem]
    })
    this.setState(()=>{
      return {products:tempProducts}
    })
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id)
    return product
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product};
    })
  }

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempFavourite = [...this.state.Favourite];
    tempFavourite = tempFavourite.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inFavourite = false;
    this.setState(()=>{
      return {
        Favourite:[...tempFavourite],
        products:[...tempProducts]
      }
    })
  }


  addToFavourite = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    if(!product.inFavourite)
    {
      product.inFavourite = true;
      this.setState(()=>{
        return {products:tempProducts,
          Favourite:[...this.state.Favourite,product]};
      })
    } else {
      this.removeItem(id);
    }
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(()=>{
      return { modalProduct:product, modalOpen: true }
    })
  }

  closeModal = () => {
    this.setState(()=>{
      return { modalOpen: false }
    })
  }

  searchBox = (event) => {
    event.preventDefault();
    const search = event.target.searchbox.value;
      this.setState(()=>{
        return {searchTerm:search};
      })
  }


  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToFavourite: this.addToFavourite,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearFavourite:this.clearFavourite,
        getMightLikeProducts: this.getMightLikeProducts,
        fetchMoreData:this.fetchMoreData,
        searchBox:this.searchBox,
        advancedSearch:this.advancedSearch,
        fetchMoreAdvancedSearchData:this.fetchMoreAdvancedSearchData
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }