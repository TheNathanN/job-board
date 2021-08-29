import React from 'react';
import Tags from './Tags';

const LanguageTags = ({ languages }) => {
  return (
    <>
      {languages.map(lang => (
        <Tags key={lang} lang={lang} />
      ))}
    </>
  );
};

export default LanguageTags;
