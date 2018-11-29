import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './styles.scss';
import items from 'data/sections/portfolio';
import sectionMessages from 'data/sections/messages';
import { SECTION_PORTFOLIO as SECTION} from 'data/sections';
import Carousel from './carousel';
import Cards from './cards';

const BREAKPOINT = 700;

const Portfolio = (props) => (
    <div id={ SECTION.id }>
      <div className="title-header">
        <h1 className="title">
          <i className={'fas ' + SECTION.icon} />
          <FormattedMessage {...sectionMessages[SECTION.id]} />
        </h1>
        <div className="repo-link">
          <a href="https://github.com/dtodo1paco?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-github-alt"></i>
          </a>
        </div>
      </div>
      {window.innerWidth <= BREAKPOINT && <Carousel items={items.sort(function(a, b){return 0.5 - Math.random()})} messages={messages} />}
      {window.innerWidth > BREAKPOINT && <Cards items={items.sort(function(a, b){return 0.5 - Math.random()})} messages={messages} />}
    </div>
);
export default Portfolio;