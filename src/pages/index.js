// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to De Mot Agency!</h1>
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="../images/martha.jpg"
      />
    </Layout>
  )
}

export default IndexPage