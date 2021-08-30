import React from 'react';
import styled from 'styled-components';

const Tags = ({ role, level, lang, tool, filterItems, setFilterItems }) => {
  //Functions

  const addFilterItem = () => {
    if (role && !filterItems.includes(role)) {
      setFilterItems([...filterItems, role]);
    } else if (level && !filterItems.includes(level)) {
      setFilterItems([...filterItems, level]);
    } else if (tool && !filterItems.includes(tool)) {
      setFilterItems([...filterItems, tool]);
    } else if (lang && !filterItems.includes(lang)) {
      setFilterItems([...filterItems, lang]);
    }
  };

  return (
    <Container>
      {role ? (
        <p className='unfiltered' onClick={addFilterItem}>
          {role}
        </p>
      ) : (
        ''
      )}
      {level ? (
        <p className='unfiltered' onClick={addFilterItem}>
          {level}
        </p>
      ) : (
        ''
      )}
      {lang ? (
        <p className='unfiltered' onClick={addFilterItem}>
          {lang}
        </p>
      ) : (
        ''
      )}
      {tool ? (
        <p className='unfiltered' onClick={addFilterItem}>
          {tool}
        </p>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Tags;

//Styles

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  background-color: hsl(180deg 43% 89%);
  border-radius: 2px;
  color: hsl(180, 29%, 50%);
  height: 1.5rem;
  padding: 0.14rem 0.4rem 0;
  cursor: pointer;
  transition: 0.2s ease;

  p {
    font-size: 0.8rem;
    font-weight: bold;
  }

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }

  @media screen and (max-width: 360px) {
    margin: 0.2rem;
  }
`;
