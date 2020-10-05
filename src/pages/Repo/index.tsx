import React from 'react';
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrump,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />

        <Link className={'username'} to={'/lucasbdias'}>
          lucasbdias
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/lucasbdias/youtube-content'}> Youtube Content </Link>
      </Breadcrump>

      <p>Contains all of my Youtube lessons Code</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/lucasbdias/youtube-content'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;