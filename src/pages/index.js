import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import '../styles/index.css'
import landingStyles from '../styles/landing.module.css'
import portrait from '../images/me.png'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Morgan Richardson's Portfolio</title>
      </Helmet>
      <Layout>
        <div className="index-container">
          <h1 className={landingStyles.hello}>HI, I'M MORGAN RICHARDSON.</h1>
          <h2 className={landingStyles.info}>I'M CURRENTLY STUDYING SOFTWARE ENGINEERING IN CHICAGO. WHEN I'M NOT EXPLORING THE CITY, I'M BUILDING, CREATING, AND LEARNING.</h2>
          <div className={landingStyles.surroundingDiv}>
            <img className={landingStyles.me} src={portrait} alt="Morgan"></img>
          </div>
          <div className={landingStyles.sideBar}></div>
        </div>
        <div className={landingStyles.contactInfo}>
          <a href="https://www.linkedin.com/in/morganrmarie"><FontAwesomeIcon icon = { faLinkedin } className = { landingStyles.socialIcons } /></a>
          <a href="https://www.github.com/morganrmarie"><FontAwesomeIcon icon = { faGithub } className = { landingStyles.socialIcons } /></a>
          <a href="https://www.instagram.com/morgan.codes"><FontAwesomeIcon icon = { faInstagram } className = { landingStyles.socialIcons } /></a>
          <a href="mailto:morganrmarie@gmail.com?subject=Morgan.Codes Inquiry"><FontAwesomeIcon icon = { faEnvelopeSquare } className = { landingStyles.socialIcons } /></a>
        </div>
      </Layout>
  </div>
  )
}

export default IndexPage
