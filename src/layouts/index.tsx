import * as React from 'react';

import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import './index.css';
import '../assets/fonts/stylesheet.css';

import styled from 'styled-components';
import { MobileLikeFormat } from '../styles/breakpoints';

interface TemplateWrapperProps {
  children: any;
}

const TemplateWrapper: React.SFC<TemplateWrapperProps> = ({ children }) => (
  <div>
    <Helmet
      title='Brandon Hedrick'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Sidebar />
    <MainContentWrapper>
      {children()}
    </MainContentWrapper>
  </div>
);

export default TemplateWrapper;

const MainContentWrapper = styled.div`
  height: '100vh',
  overflow: 'hidden',
  ${MobileLikeFormat(`
    height: auto;
    overflow: auto;
  `)}
`;
