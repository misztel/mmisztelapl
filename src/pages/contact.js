import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const ContactPage = () => (
  <>
    <Seo title="Contact" />
    <h1>Contact</h1>
    <p>This is contact page content</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ContactPage
