import React from 'react';
import Tags from './Tags';

const ToolTags = ({ tools }) => {
  return (
    <>
      {tools.map(tool => (
        <Tags key={tool} tool={tool} />
      ))}
    </>
  );
};

export default ToolTags;
