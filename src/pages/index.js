import React, { Fragment } from "react"
import Header from "../components/header"
import HeaderMark from "../components/headermark"
import HomepageBanner from "../components/homepagebanner"
const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMark />
      <HomepageBanner />
    </Fragment>
  )
}

export default IndexPage
