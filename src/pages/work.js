import React, {useState} from 'react';
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/Layout/layout"
import Subheader from "../components/subheader/subheader"

const Work = ({ data }) => {
  const [isPlate, setIsPlate] = useState(false);
  return (
  <Layout page={"work"}>
    <header className="header">
      <button className={isPlate ? 'button' : 'button-active'} onClick={() => setIsPlate(false)}>
        Crochet
      </button>
      <button className={isPlate ? 'button-active' : 'button'} onClick={() => setIsPlate(true)}>
        Ceramics
      </button>
    </header>

    <Masonry className="showcase">
      {data.allDatoCmsWork.edges
        .filter(({node: work}) => work.isplate === isPlate)
        .map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
                <p>{work.isplate ? 'plate' : 'crochet'}</p>
              </div>
            </figcaption>
          </figure>
        </div>
        ))}
    </Masonry>
  </Layout>
)}

export default Work

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          isplate
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
