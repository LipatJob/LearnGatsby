import * as React from "react";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.edges.map(({ node }) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query GetBlogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  }
`;

export default BlogPage;
