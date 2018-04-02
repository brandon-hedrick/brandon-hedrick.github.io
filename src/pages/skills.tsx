import * as React from 'react';

import SplitLayout from '../components/SplitLayout';
import MainContentSection from '../components/MainContentSection';

const SkillsPage = () => (
  <SplitLayout
  primary={
    <Primary/>
  }
  secondary={
    <Secondary/>
  }
  />
);

export default SkillsPage;

// to avoid linting error using mixed quotes in jsx  with ts
const subtitle = 'Yeah, I\'ve got some skills';

const Primary = () => (
  <MainContentSection title={'Skills'} subtitle={subtitle}>
    <p>
      I’ve been developing front end professionally for going on four years now. Over that time I’ve amassed quite a few
      tricks of the trade.
    </p>
    <p>
      When I first began work in 2014, I was introduced to several, powerful new tools: Jade, Sass, and Grunt/Gulp.
      These were amazing new tools to me that I used to streamline my workflow in ways I could only dream of previously.
    </p>
    <p>
      After a two years or so of working with static sites, I began to enter the world a javascript heavily applications
      and single page applications. My experience ranges from AngularJS to React (and React Native) and more recently
      Angular. I love working in Redux-like patterns and have grown very fond of writing asyncronous code with RxJS.
    </p>
    <p>
      Here you can see a complete list of my skills.
    </p>
  </MainContentSection>
);

const Secondary = () => (
  <div>
  </div>
);
