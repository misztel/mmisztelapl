import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <h1>Resume</h1>
    <p>This is resume page content</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResumePage
