import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'


export default function template({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={ post.frontmatter.title }/>
            <Link to='/blog'>Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`