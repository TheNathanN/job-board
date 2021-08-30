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
      {filterItems.length > 0 ? (
        <main>
          {data
            .filter(listings => {
              const tool = listings.tools;
              const langs = listings.languages;
              const level = listings.level;
              const roles = listings.role;
              return (
                filterItems.includes(roles) ||
                filterItems.includes(level) ||
                [...filterItems].includes(...langs) ||
                [...filterItems].includes(...tool)
              );
            })
            .map(listing => (
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
      ) : (
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
      )}
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
