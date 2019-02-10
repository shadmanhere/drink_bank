import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand navbar-dark fixed-top">
        {/* <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link> */}
        <ul className="navbar-nav align-items-center ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favourite" className="nav-link">
              Favorite
            </Link>
          </li>
        </ul>
        {/* <Link to='/Favourite' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-Favourite-plus" />
            </span>
            my Favourite
          </ButtonContainer>
        </Link> */}
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background:var(--mainOrange);
  z-index:1
  .nav-link{
    color:var(--mainWhite)!important;
    text-transform:capitalize !important;
  }
`