import React, { useState } from 'react';
import Listings from './components/Listings';
import styled from 'styled-components';
import data from './data.json';

function App() {
  //State
  const [filterItems, setFilterItems] = useState([]);

  return (
    <Container>
      <div className='header'>
        <div className='image'></div>
      </div>
      <main>
        {data.map(listing => (
          <Listings
            key={listing.id}
            company={listing.company}
            logo={listing.logo}
            newPost={listing.new}
            featured={listing.featured}
            position={listing.position}
            role={listing.role}
            level={listing.level}
            postedAt={listing.postedAt}
            contract={listing.contract}
            location={listing.location}
            languages={listing.languages}
            tools={listing.tools}
            filterItems={filterItems}
            setFilterItems={setFilterItems}
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
    height: 7rem;
    .image {
      background-image: url('/images/bg-header-desktop.svg');
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
