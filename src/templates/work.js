import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import {HelmetDatoCms} from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import Layout from "../components/Layout/layout";
import { useMedia } from 'react-media';

export default ({ data }) => {
  // let [smallWindow, setSmallWindow] = useState(900);
  // useEffect(() => {
  //   const resizeListener = () => {
  //     // change width from the state object
  //     setSmallWindow(window.innerWidth );
  //     console.log(window.innerWidth);
  //   };
  //   // set resize listener
  //   window.addEventListener('resize', resizeListener);
  //
  //   // clean up function
  //   return () => {
  //     // remove resize listener
  //     window.removeEventListener('resize', resizeListener);
  //   }
  // }, [])

  const isSmallWindow = useMedia({query: "(max-width: 599px"});
  console.log(isSmallWindow);
  return (
    <Layout page={"work"}>
      <article className={isSmallWindow ? "sheet__work" : "sheet__flex"}>
        <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags}/>
        <div className="sheet__inner">
          <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
          <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
          <div className="sheet__slider">
            <Slider infinite={true} slidesToShow={2} arrows>
              {data.datoCmsWork.gallery.map(({ fluid }) => (
                <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src}/>
              ))}
            </Slider>
          </div>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
            }}
          />
          <div className="sheet__gallery">
            <Img fluid={data.datoCmsWork.coverImage.fluid}/>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
