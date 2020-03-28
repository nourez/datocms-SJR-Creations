import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/Layout/layout"
import Subheader from "../components/subheader/subheader"

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
}
`)

  console.log(data);
  return (
  <Layout page={"home"}>
   <div className="sheet__centered">
     <h1 className="sheet__title">Hi, I'm Shelina, and this is SJR Creations</h1>
     <img src="https://www.supergurumi.com/wp-content/uploads/2019/11/Mouse-Amigurumi-Crochet-Pattern.jpg" alt="crafts I make" />
     <div className="sheet__body">
       <h3>I make Amigurumi and Plates</h3>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <h3>Check out my social media</h3>
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
