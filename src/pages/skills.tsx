import * as React from 'react';

import SplitLayout from '../components/SplitLayout';
import TitularLayout from '../components/TitularLayout';

// to avoid linting error using mixed quotes in jsx  with ts
const subtitle = 'Yeah, I\'ve got some skills';

const LightCol = () => (
  <TitularLayout title={'Skills'} subtitle={subtitle}/>
);

const DarkCol = () => (
  <div>
  </div>
);

const SkillsPage = () => (
  <SplitLayout
    light={
      <LightCol/>
    }
    dark={
      <DarkCol/>
    }
  />
);

export default SkillsPage;
