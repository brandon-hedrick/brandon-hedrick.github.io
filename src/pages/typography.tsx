import * as React from 'react'
import { Typography } from '../styles/typography';
import { Colors } from '../styles/colors';

const TypographyPage = () => (
  <div style= {{
    display: 'flex',
    height: '100vh',
    justifyContent: 'stretch'
  }}>
    <div style={{
      width: '100%',
      padding: '8.25rem 4rem 4rem 7.25rem',
    }}>
      <h2 style={Typography.headerNav}>Light Typography</h2>
      <span>Logo Title</span>
      <h1 style={Typography.logoTitle}>Brandon Hedrick</h1>
      <span>Header Nav</span>
      <h4 style={Typography.headerNav}>About     Skills      Work</h4>
      <span>Page Title</span>
      <h2 style={Typography.pageTitle}>Skills</h2>
      <span>Page Subtitle</span>
      <h3 style={Typography.pageSubtitle}>I'm a Javascript Developer RxJs</h3>
      <span>Standard Paragraph</span>
      <p style={Typography.paragraph}>When I first began work in 2014, I was introduced to several, powerful new tools: Jade, Sass, and Grunt/Gulp. These were amazing new tools to me that I used to streamline my workflow in ways I could only dream of previously.</p>
    </div>
    <div style={{
      width: '100%',
      padding: '2rem 4rem',
      backgroundColor: Colors.darkGrey
    }}>
      <h2 style={Typography.darkTitle}>Dark Typography</h2>
      <span style={{color: Colors.lightGrey}}>Dark Title</span>
      <h1 style={Typography.darkTitle}>I Know...</h1>
      <span style={{color: Colors.lightGrey}}>Dark Heading</span>
      <h2 style={Typography.darkHeading}>RxJs</h2>
    </div>
  </div>  
)

export default TypographyPage
