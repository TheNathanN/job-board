import React from 'react';
import styled from 'styled-components';

const Tags = ({ role, level, lang, tool, filterItems, setFilterItems }) => {
  return (
    <Container>
      {role ? <h6>{role}</h6> : ''}
      {level ? <h6>{level}</h6> : ''}
      {lang ? <h6>{lang}</h6> : ''}
      {tool ? <h6>{tool}</h6> : ''}
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  background-color: hsl(180deg 43% 89%);
  border-radius: 2px;
  color: hsl(180, 29%, 50%);
  height: 1.5rem;
  padding: 0.14rem 0.4rem 0;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }
`;
