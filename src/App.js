import React, { useState } from 'react';
import styled from 'styled-components';
import data from './data.json';
import Listings from './components/Listings';
import TagFilter from './components/TagFilter';

function App() {
  //State
  const [filterItems, setFilterItems] = useState([]);

  return (
    <Container>
      <div className='header'>
        <div className='image'></div>
      </div>
      <div className='filter-bar'>
        {filterItems.length > 0 ? (
          <TagFilter
            filterItems={filterItems}
            setFilterItems={setFilterItems}
          />
        ) : (
          <div></div>
        )}
      </div>
      <main>
        {data.map(listing => (
          <Listings
            filterItems={filterItems}
            setFilterItems={setFilterItems}
            key={listing.id}
            listing={listing}
          />
        ))}
      </main>
    </Container>
  );
}

export default App;

//Styles

const Container = styled.div`
  width: 100%;
  height: 100%;

  .header {
    background-color: hsl(180, 29%, 50%);
    height: 9.5rem;
    .image {
      background-image: url('/images/bg-header-desktop.svg');
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
  }
`;
