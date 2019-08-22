import PropTypes from "prop-types"
import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ siteTitle }) => (
  <div
    className='container-nav'
    style={{
      background: 'rebeccapurple',
      paddingTop: '10px',
      marginBottom: '0',
    }}
  >
    <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {}
        </Link>
        {/* NAVBAR */}
      </h1>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav