import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/blogpost-template.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost

    return (
      <Layout>
        <div className="blogpost-container">
          <h1 className="blogpost-title">{post.welcomeToMyBlog}</h1>
          <h3 className="blogpost-subtitle">{post.subtitle}</h3>
          <img alt="blogpost-visual" src={post.image.file.url}/>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}/>
          <h5 className="author">Author: Morgan Richardson</h5>
          <Link className="back" to="/blogposts">Back</Link>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost( slug: { eq: $slug }) {
      welcomeToMyBlog
      subtitle
      image {
        file {
          url
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
