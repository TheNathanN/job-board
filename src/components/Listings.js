import React from 'react';
import ListingData from './ListingData';
import styled from 'styled-components';

const Listings = ({
  company,
  logo,
  newPost,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filterItems,
  setFilterItems,
}) => {
  return (
    <ListingContainer>
      <ListingData
        company={company}
        logo={logo}
        newPost={newPost}
        featured={featured}
        position={position}
        role={role}
        level={level}
        postedAt={postedAt}
        contract={contract}
        location={location}
        languages={languages}
        tools={tools}
        filterItems={filterItems}
        setFilterItems={setFilterItems}
      />
    </ListingContainer>
  );
};

export default Listings;

//Styles

const ListingContainer = styled.div`
  width: 75%;
  height: 5rem;
  border: 1px solid black;
  margin: 1rem 0;
`;
