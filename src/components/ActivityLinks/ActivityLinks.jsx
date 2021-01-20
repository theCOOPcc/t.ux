import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const ActivityLinks = ({ links }) => {
  return (
    <U.Sub6ColGrid>
      <h2>More Heuristics Resources</h2>
      <p>
        Don't stop here! There are a lot more ways to learn about accessibility
        and many websites designed to help you better design for accessibility.
      </p>
      <h3>Articles:</h3>
      <ul>
        {links.map((link, index) => (
          <li>
            <a key={index} href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </U.Sub6ColGrid>
  );
};

export default ActivityLinks;
