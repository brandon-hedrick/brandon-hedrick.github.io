import * as React from 'react'
import { TypeStyles } from '../styles/typography';

const TypographyPage = () => (
  <div>
    <h2 style={TypeStyles.headerNav}>Typography</h2>
    <span>Logo Title</span>
    <h1 style={TypeStyles.logoTitle}>Brandon Hedrick</h1>
    <span>Header Nav</span>
    <h4 style={TypeStyles.headerNav}>About     Skills      Work</h4>
    <span>Page Title</span>
    <h2 style={TypeStyles.pageTitle}>Skills</h2>
    <span>Page Subtitle</span>
    <h3 style={TypeStyles.pageSubtitle}>I'm a Javascript Developer</h3>
    <span>Standard Paragraph</span>
    <p style={TypeStyles.paragraph}>When I first began work in 2014, I was introduced to several, powerful new tools: Jade, Sass, and Grunt/Gulp. These were amazing new tools to me that I used to streamline my workflow in ways I could only dream of previously.</p>
  </div>  
)

export default TypographyPage
