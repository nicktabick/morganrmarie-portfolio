import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/links.css'

const Links = () => {
  return (
    <div>
      <Layout>
        <div className="link-container">
          <div className="link-box"><a className="a-contact-link" href="https://www.attwizardsunite.com/chi" target="_blank" rel="noopener noreferrer">AT&T</a></div>
          <div className="link-box"><a className="a-contact-link" href="https://www.github.com/morganrmarie" target="_blank" rel="noopener noreferrer">GITHUB</a></div>
          <div className="link-box"><Link className="a-contact-link" to="/blogposts">BLOG</Link></div>
          <div className="link-box"><a className="a-contact-link" href="mailto:morganrmarie@gmail.com?subject=morgan.codes inquiry">EMAIL</a></div>
          <div className="link-box"><Link className="a-contact-link" to="/">HOME</Link></div>
        </div>
      </Layout>
    </div>
  )
}

export default Links
