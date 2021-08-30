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
        <h6 className='unfiltered' onClick={addFilterItem}>
          {role}
        </h6>
      ) : (
        ''
      )}
      {level ? (
        <h6 className='unfiltered' onClick={addFilterItem}>
          {level}
        </h6>
      ) : (
        ''
      )}
      {lang ? (
        <h6 className='unfiltered' onClick={addFilterItem}>
          {lang}
        </h6>
      ) : (
        ''
      )}
      {tool ? (
        <h6 className='unfiltered' onClick={addFilterItem}>
          {tool}
        </h6>
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

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }
`;
