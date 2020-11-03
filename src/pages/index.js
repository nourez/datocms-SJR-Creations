import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/Layout/layout"
import Subheader from "../components/subheader/subheader"
//comment blah blah
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
    allDatoCmsSocialProfile {
      edges {
        node {
          profileType
          url
        }
      }
    }
    allDatoCmsHome {
      nodes {
        introText
        homeTitle
        introBlurb
        titleImage {
          url
        }
      }
    }
  }

`)

  console.log(data);
  console.log(data.allDatoCmsHome.nodes[0].introText);
  console.log(data.allDatoCmsHome.nodes[0].titleImage);

  return (
  <Layout page={"home"}>
   <div className="sheet__centered">
     <h1 className="sheet__title">{data.allDatoCmsHome.nodes[0].homeTitle}</h1>
     <img src={data.allDatoCmsHome.nodes[0].titleImage.url} alt="crafts I make" className="cover__image"/>
     <div className="sheet__body">
       <h3>{data.allDatoCmsHome.nodes[0].introBlurb}</h3>
       <p >{data.allDatoCmsHome.nodes[0].introText}</p>
       <h3>Checks out my social media</h3>
       <p className="sidebar__social">
         {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
           <a
             key={profile.profileType}
             href={profile.url}
             target="blank"
             className={`social social--${profile.profileType.toLowerCase()}`}
           >
             {" "}
           </a>
         ))}
       </p>
     </div>
   </div>

  </Layout>
)};

export default IndexPage;
