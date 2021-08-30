import React from 'react';
import Tags from './Tags';

const LanguageTags = ({ languages, filterItems, setFilterItems }) => {
  return (
    <>
      {languages.map(lang => (
        <Tags
          filterItems={filterItems}
          setFilterItems={setFilterItems}
          key={lang}
          lang={lang}
        />
      ))}
    </>
  );
};

export default LanguageTags;
