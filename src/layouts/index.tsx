import * as React from 'react';

import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import './index.css';
import '../assets/fonts/stylesheet.css';

import styled from 'styled-components';
import { MobileLikeFormat, ScreenResize } from '../styles/breakpoints';

interface TemplateWrapperProps {
  children: any;
}

interface TemplateWrapperState {
  shouldRenderMobileLike?: boolean;
}

class TemplateWrapper extends React.Component<TemplateWrapperProps, TemplateWrapperState> {
  private children: any;
  private mobileLike$: any;

  constructor(props: TemplateWrapperProps) {
    super(props);
    this.children = props.children;
    this.state = {
      shouldRenderMobileLike: false,
    };
  }

  componentDidMount() {
    this.mobileLike$ = ScreenResize
      .resizeEvents()
      .subscribe('shouldRenderMobileLike',
        (shouldRenderMobileLike: boolean) => {
          this.setState({ shouldRenderMobileLike });
        }, true);
  }

  componentWillUnmount() {
    this.mobileLike$.unsubscribe();
  }

  render() {
    return (
      <div>
        <Helmet
          title='Brandon Hedrick'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        {
          !this.state.shouldRenderMobileLike &&
          <Sidebar />
        }
        <MainContentWrapper>
          {this.children()}
        </MainContentWrapper>
      </div>
    );
  }
}

export default TemplateWrapper;

const MainContentWrapper = styled.div`
  height: '100vh',
  overflow: 'hidden',
  ${MobileLikeFormat(`
    height: auto;
    overflow: auto;
  `)}
`;
