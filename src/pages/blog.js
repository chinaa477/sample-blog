import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map((post, i) => (
          <div key={i}>
            <h3>{post.node.frontmatter.title}</h3>
            <br />
            <Link to={post.node.frontmatter.path}>Readmore</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default Blog
