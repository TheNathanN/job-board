import React from 'react';
import styled from 'styled-components';

const FilterItemsCont = ({
  item,
  roleFilter,
  setRoleFilter,
  levelFilter,
  setLevelFilter,
  langFilter,
  setLangFilter,
  toolFilter,
  setToolFilter,
  filterItems,
  setFilterItems,
}) => {
  //Functions
  const removeItem = () => {
    const newFilterItems = filterItems.filter(items => items !== item);
    setFilterItems(newFilterItems);
    if (roleFilter) {
      setRoleFilter('');
    } else if (levelFilter) {
      setLevelFilter('');
    } else if (langFilter) {
      setLangFilter('');
    } else if (toolFilter) {
      setToolFilter('');
    }
  };

  return (
    <Container>
      <h6>{item}</h6>
      <div className='remove' onClick={removeItem}></div>
    </Container>
  );
};

export default FilterItemsCont;

//Styles

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: hsl(180deg 43% 89%);
  height: 1.3rem;
  padding-left: 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  h6 {
    font-size: 0.7rem;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
  }

  .remove {
    background-image: url('/images/icon-remove.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.6rem;
    display: flex;
    align-items: center;
    background-color: hsl(180, 29%, 50%);
    width: 1.2rem;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: hsl(180, 14%, 20%);
    }
  }
`;
