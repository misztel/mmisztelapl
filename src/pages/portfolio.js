import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <h1>Portfolio</h1>
    <p>This is portfolio page content</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
