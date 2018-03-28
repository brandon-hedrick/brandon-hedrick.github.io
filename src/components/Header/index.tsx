import * as React from 'react'
import Link from 'gatsby-link'
import { Colors } from '../../styles/colors'
import { Typography } from '../../styles/typography'

const Header = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      width: '50%',
    }}
  >
    <div
      style={{
        padding: '1.5rem 2.5rem',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        height: '5rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            ...Typography.logoTitle,
            textDecoration: 'none',
          }}
        >
          Brandon Hedrick
        </Link>
      </h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        justifyContent: 'flex-end'
      }}>
        <li style={{margin: 0}}>
          <Link 
            to="/"
            style={{
              ...Typography.headerNav,
              textDecoration: 'none',
              marginLeft: '2.5rem'
            }}
          >About</Link>
        </li>
        <li style={{margin: 0}}>
          <Link 
            to="/"
            style={{
              ...Typography.headerNav,
              textDecoration: 'none',
              marginLeft: '2.5rem'
            }}
          >Skills</Link>
        </li>
        <li style={{margin: 0}}>
          <Link 
            to="/"
            style={{
              ...Typography.headerNav,
              textDecoration: 'none',
              marginLeft: '2.5rem'
            }}
          >Work</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
