import React from 'react';
import Tags from './Tags';

const ToolTags = ({ tools, filterItems, setFilterItems }) => {
  return (
    <>
      {tools.map(tool => (
        <Tags
          filterItems={filterItems}
          setFilterItems={setFilterItems}
          key={tool}
          tool={tool}
        />
      ))}
    </>
  );
};

export default ToolTags;
