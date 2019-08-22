/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* HEADER */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {/* MAIN */}
        <main
        style={{
          minHeight: '80vh',
        }}
        >
          {children}
        </main>
        {/* FOOTER */}
        
      </div>
      <footer
        style={{
          background: 'rebeccapurple',
          color: 'white',
        }}
        >
          Jorge Machado © {new Date().getFullYear()}, Built with
          {` `}
          <a 
            href="https://www.gatsbyjs.org" 
            target='blank'
          ><strong>Gatsby</strong></a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
