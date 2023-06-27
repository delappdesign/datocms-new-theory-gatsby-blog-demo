import React from "react";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { motion } from "framer-motion";

export default function Index({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      {/* <motion.div
        initial={{y: "20%"}}
        animate={{y:"0"}}
        transition={{duration: 0.5}}
      > */}
        <Intro />
      {/* </motion.div> */}
      {/* <motion.section
       initial={{y: "5%"}}
       animate={{y: "0"}}
       transition={{duration: 0.5}}
      > */}
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {/* </motion.section> */}
      {/* <motion.div
        initial={{y: "20%"}}
        whileInView={{y: "0%"}}
        transition={{duration: 1}}
      > */}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      {/* </motion.div> */}
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
