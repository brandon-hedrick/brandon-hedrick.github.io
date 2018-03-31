import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './index.css'
import '../assets/fonts/stylesheet.css'

interface TemplateWrapperProps {
  children: any;
}

const TemplateWrapper: React.SFC<TemplateWrapperProps> = ({ children }) => (
  <div>
    <Helmet
      title="Brandon Hedrick"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Sidebar />
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
