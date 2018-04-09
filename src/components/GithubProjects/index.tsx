import * as React from 'react';
import { Component } from 'react';

import LoadingIcon from '../LoadingIcon';

import styled from 'styled-components';
import { StyledTypography, titillium, butler } from '../../styles/typography';
import { Colors } from '../../styles/colors';

interface GithubProjectsState {
  loading: boolean;
  projects?: any[];
  error?: string;
}

class GithubProjects extends React.Component<{}, GithubProjectsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.createGitHubProjects();
  }

  render() {
    return (
      <div>
        {this.state.loading && <LoadingIcon/>}
        <ProjectList>{this.state.projects}</ProjectList>
      </div>
    );
  }

  fetchGithubProjects() {
    return fetch('https://api.github.com/users/brandon-hedrick/repos')
      .then((res) => res.json());
  }

  async createGitHubProjects() {
    const results = await this.fetchGithubProjects();
    if (results && Array.isArray(results)) {
      this.setState((s) =>
        ({
          projects: results.map((r, i) =>
            <Project key={i} name={r.name} description={r.description} language={r.language}
            updated={`Updated ${this.formatDate(r.updated_at)}`} href={r.html_url}/>,
          ),
        }),
      );
    } else {
      // error handling
      console.log(results);
    }
    this.setState((s) => ({ loading: false }));
  }

  formatDate(d: string) {
    const date = new Date(d);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}

export default GithubProjects;

interface ProjectProps {
  name?: string;
  description?: string;
  language?: string;
  updated?: string;
  href?: string;
}

const Project: React.SFC<ProjectProps> = ({ name, description, language, updated, href }) => (
  <ProjectItem>
    <ProjectTitleWrapper>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectLangBadge>{language}</ProjectLangBadge>
    </ProjectTitleWrapper>
    <ProjectBody>
      <p>{description}</p>
    </ProjectBody>
    <ProjectFooter>
      <ProjectUpdateDate>{updated}</ProjectUpdateDate>
      <ProjectLinkToGH target='_blank' href={href}>View on Github</ProjectLinkToGH>
    </ProjectFooter>
  </ProjectItem>
);

const ProjectList = styled.ul`
  margin: 0
`;

const ProjectItem = styled.li`
  color: ${Colors.lightGrey};
  background-color: ${Colors.deepGrey};
  list-style: none;
  padding: 3rem;
  margin-bottom: 3rem;
`;

const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ProjectTitle = styled.h5`
  ${StyledTypography.darkHeading}
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectLangBadge = styled.span`
  display: inline-block;
  background-color: ${Colors.darkGrey};
  padding: .5rem .75rem;
  border-radius: .75rem;
  font-family: ${titillium};
  font-size: 1.25rem;
  margin-left: 1rem;
`;

const ProjectBody = styled.div`
  margin: 3rem 0;
  font-family: ${butler.medium};
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: .05rem;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ProjectUpdateDate = styled.span`
  font-family: ${titillium};
  font-size: 1.25rem;
`;

const ProjectLinkToGH = styled.a`
  display: block;
  padding: .75rem 1.25rem;
  border: .1rem solid ${Colors.lightGrey};
  color: ${Colors.lightGrey};
  font-family: ${titillium};
  text-decoration: none;
  transition: 0.25s ease;
  &:hover {
    background-color: ${Colors.lightGrey};
    color: ${Colors.darkGrey};
  };
`;
