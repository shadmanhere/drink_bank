import React from 'react'
import styled from 'styled-components'
import SearchBox from './SearchBox'

export default function Title({name}) {
  return (
    <TitleWrapper className="row">
      <div className="col-12 col-md-10 mx-auto my-5 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
        {name}
        </h1>
        <SearchBox />
      </div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.title`
  background:var(--mainOrange);
  color:var(--mainWhite);
`