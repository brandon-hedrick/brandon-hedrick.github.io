import * as React from 'react';

import LoadingIcon from '../LoadingIcon';
import { ProjectList, ProjectItem, ProjectTitle, ProjectTitleWrapper, ProjectBody, ProjectFooter,
  ProjectLangBadge, ProjectLinkToGH, ProjectUpdateDate } from './styled';
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
