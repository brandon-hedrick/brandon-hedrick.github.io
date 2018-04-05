import * as React from 'react';

import SplitLayout from '../components/SplitLayout';
import MainContentSection from '../components/MainContentSection';

const WorkPage = () => (
  <SplitLayout
    primary={
      <Primary/>
    }
    secondary={
      <Secondary/>
    }
  />
);

export default WorkPage;

const Primary = () => (
  <MainContentSection title={'Work'} subtitle={'I like to make cool stuff...'}>
    <p>
      With my current job, I’m not legally allowed to share any of the codeI’ve written or release any client
      information. With that said, I make all kinds of cool stuff in my free time.
    </p>
    <p>
      Over the years I’ve started on lots of projects that I used to learn new libraries, concepts or maybe just to do
      something fun. I even finished some of them too!
    </p>
    <p>
      To the right you’ll find a list of projects from my Github. Feel free to check me out and see what I’ve been up to
      lately!
    </p>
  </MainContentSection>
);

const Secondary = () => (
  <div>
  </div>
);
