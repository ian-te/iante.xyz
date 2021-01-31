import * as React from "react"
import { Helmet } from "react-helmet"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet><title>iante.xyz &mdash; Home Page</title></Helmet>
      <h2>iante.xyz</h2>
    </main>
  )
}

export default IndexPage
