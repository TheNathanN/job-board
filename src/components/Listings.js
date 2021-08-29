import React from 'react';
import ListingData from './ListingData';
import styled from 'styled-components';

const Listings = ({ listing, filterItems, setFilterItems }) => {
  return (
    <ListingContainer>
      <ListingData
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
    </ListingContainer>
  );
};

export default Listings;

//Styles

const ListingContainer = styled.div`
  width: 75%;
  height: 9rem;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: white;
  box-shadow: 1px 3px 6px #1c5d5dab;
`;
