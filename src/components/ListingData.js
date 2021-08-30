import React from 'react';
import styled from 'styled-components';
import Tags from './Tags';
import LanguageTags from './LanguageTags';
import ToolTags from './ToolTags';

const ListingData = ({
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
    <Container>
      {/* ------------------ 1. Info Half -------------------- */}
      {featured ? <div className='ft-stripe'></div> : <div></div>}
      <img src={logo} alt='company logo' />
      <div className='data'>
        <div className='job-info'>
          {/* --------- Top Info-------- */}
          <div className='top-info'>
            <h6>{company}</h6>
            {newPost ? <div className='new icon'>NEW</div> : <div></div>}
            {featured ? (
              <div className='featured icon'>FEATURED</div>
            ) : (
              <div></div>
            )}
          </div>
          {/* --------- Middle Info -------- */}
          <h4>{position}</h4>
          {/* --------- Bottom Info -------- */}
          <div className='meta-info'>
            <p>
              {postedAt} <span>.</span> {contract} <span>.</span> {location}
            </p>
          </div>
        </div>

        {/* --------------- 2. Tags Half -------------- */}
        <div className='job-tags'>
          {/* ----------- Render Role Tags ------- */}
          {role ? (
            <Tags
              role={role}
              filterItems={filterItems}
              setFilterItems={setFilterItems}
            />
          ) : (
            ''
          )}
          {/* --------- Render Level Tags -------- */}
          {level ? (
            <Tags
              level={level}
              filterItems={filterItems}
              setFilterItems={setFilterItems}
            />
          ) : (
            ''
          )}
          {/* -------- Render Language Tags ------ */}
          {languages ? (
            <LanguageTags
              languages={languages}
              filterItems={filterItems}
              setFilterItems={setFilterItems}
            />
          ) : (
            ''
          )}
          {/* --------- Render Tool Tags -------- */}
          {tools ? (
            <ToolTags
              tools={tools}
              filterItems={filterItems}
              setFilterItems={setFilterItems}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </Container>
  );
};

export default ListingData;

//Styles

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 2rem;
  position: relative;

  .ft-stripe {
    background-color: hsl(180, 29%, 50%);
    position: absolute;
    left: 0;
    width: 0.4rem;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  img {
    width: 6rem;
  }

  .data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .job-info {
    margin-left: 1.5rem;
    .top-info {
      display: flex;
      align-items: center;
      h6 {
        font-size: 0.75rem;
        color: hsl(180, 29%, 50%);
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.52rem;
        font-weight: bold;
        color: white;
        margin: 0 0.25rem;
        padding-top: 0.2rem;
        border-radius: 20px;
        height: 18px;
        text-align: center;
      }
      .new {
        background-color: hsl(180, 29%, 50%);
        width: 2.5rem;
      }
      .featured {
        background-color: hsl(180, 14%, 20%);
        width: 4.2rem;
      }
    }

    h4 {
      font-size: 1rem;
      margin: 0.6rem 0 0.4rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        color: hsl(180, 29%, 50%);
      }
    }

    .meta-info {
      display: flex;
      align-items: center;
      color: gray;
      p {
        font-size: 0.7rem;
      }
      span {
        font-size: 1rem;
        font-weight: bold;
        margin: 0 0.5rem;
      }
    }
  }

  .job-tags {
    display: flex;
    flex-wrap: wrap;
  }
`;
