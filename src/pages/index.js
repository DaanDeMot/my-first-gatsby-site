// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'
import Artist from '../components/artist'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  artists,
} from '../components/page.module.css'

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}> {homePage.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>
            {homePage.callToAction.description}
          </a>
        </div>

        
        <div>
        <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>

      <div className={section}>
    <h2 className={subtitle}>{homePage.featuredArtists.title}</h2>
    <p>{homePage.featuredArtists.description}</p>
    <div className={artists}>
    
      {homePage.featuredArtists.artists.map(artist => (
            
             <Artist key={artist.id} artist={artist} />
             // <Artist slug={`artists/${slug}`} key={artist.id} artist={artist} /> slug wordt niet gevonden ookal steekt die wel id query, maar oke zonder gaat ook.
          ))}
        
    </div>
  </div>
    </Layout>
  )

}

export const queryHomePage = graphql`
query  {
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 500
                jpgOptions: {quality: 10}
                height: 500
              )
            }
          }
        }
      }
      callToAction {
        description
        link
      }
      featuredArtists {
        artists {
          ... on WpArtist {
            id
            artistMeta {
              artistName
              firstName
              lastName
              profilePicture {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                  }
                }
              }
            }
            slug
          }
        }
        description
        title
      }
    }
  }
}
`

export default IndexPage