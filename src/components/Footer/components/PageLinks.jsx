import React from 'react';

import pages from '../../../constants/pages';


const PageLinks = () => {
  const sections = Object.keys(pages).map((section) => {
    console.log(section);
    let links = [];
    pages[section].forEach((page) => links.push(<a href={page.link} className="page">{page.name}</a>))
    return (
      <div className="section">
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
