import React from 'react';

import pages from '../../../constants/pages';


const PageLinks = () => {
  const sections = Object.keys(pages).map((section, idx) => {
    let links = [];
    pages[section].forEach((page) => links.push(<a key={`links${page.name}-idx`} href={page.link} className="page">{page.name}</a>))
    return (
      <div key={`${section}-idx`} className="section">
        <div className="header">{section}</div>
        <div className="content">
          {links}
        </div>
      </div>
    );
  })
  return (
    <div className="page-links-container">
      {sections}
    </div>
  )
};

export default PageLinks;
