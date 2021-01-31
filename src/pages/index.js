import * as React from "react"
import { Helmet } from "react-helmet"
import { Version } from "../components/Version"
import './index.css'

// styles

// markup
const IndexPage = () => {
  return (
    <main className="main">
      <div>
        <Helmet><title>iante.xyz &mdash; Home Page</title></Helmet>
        <h2>iante.xyz</h2>
        <Version />
      </div>
    </main>
  )
}

export default IndexPage
