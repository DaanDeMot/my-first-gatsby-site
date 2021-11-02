import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { container } from './layout.module.css'
import Footer from './footer'
import {
  nav,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'


const Layout = ({ children }) => {


  const data = useStaticQuery(graphql`
  query  {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: { eq: "contact-us" }) {
      contactPage {
        companyInformation {
          address
          city
          postcode
          socials {
            facebook
            instagram
          }
        }
      }
    }

  }
  `)

  return (
    <>
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        <nav className={nav}>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <ul className={navLinks}>
            <li></li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/artists">
                Artists
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactPage.companyInformation}
      />
    </>
  )
}
export default Layout