import React from 'react';
import ListingData from './ListingData';
import styled from 'styled-components';

const Listings = ({ listing, filterItems, setFilterItems }) => {
  return (
    <ListingContainer>
      <ListingData
        key={listing.id}
        listing={listing}
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
  margin: 0 0 4rem;
  border-radius: 4px;
  background-color: white;
  box-shadow: 1px 3px 6px #1c5d5dab;

  @media screen and (max-width: 700px) {
    height: 20rem;
  }
`;
