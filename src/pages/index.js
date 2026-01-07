import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/79745099_10217589843752055_2361073977947848704_n.jpg"
      />
      <a href='https://imwa-project-app-2gyjc.ondigitalocean.app' target='_blank'>Inventory Management Web Application</a>
    </Layout>

  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage