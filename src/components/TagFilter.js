import React from 'react';
import styled from 'styled-components';
import FilterItems from './FilterItems';

const TagFilter = ({ filterItems, setFilterItems }) => {
  //Functions
  const clearItems = () => {
    setFilterItems([]);
  };

  return (
    <Container>
      <div className='tag-container'>
        {filterItems.map(item => (
          <FilterItems
            key={item}
            item={item}
            filterItems={filterItems}
            setFilterItems={setFilterItems}
          />
        ))}
      </div>
      <p onClick={clearItems}>Clear</p>
    </Container>
  );
};

export default TagFilter;

//Styles

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 70%;

  position: absolute;
  box-shadow: 1px 3px 6px #1c5d5dab;
  left: 14.5%;
  top: 12%;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  z-index: 2;

  .tag-container {
    display: flex;
    flex-wrap: wrap;
  }

  p {
    font-size: 0.77rem;
    font-weight: bold;
    color: hsl(180, 29%, 50%);
    transition: 0.2s ease;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
