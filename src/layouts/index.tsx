import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import '../assets/fonts/stylesheet.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Brandon Hedrick"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
