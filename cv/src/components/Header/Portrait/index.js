import React from 'react';
import { Media } from 'reactstrap';
import portrait from 'images/dtodo1paco.png';

const Portrait = (props) => (
  <div className="portrait">
    <Media src={portrait} />
    <div className="social-links">
      <a href="https://github.com/dtodo1paco" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github-alt"></i>
        <div className="d-none d-print-block">dtodo1paco</div>
      </a>
      <a href="https://stackoverflow.com/users/10627588/dtodo1paco" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-stack-overflow"></i>
        <div className="d-none d-print-block">dtodo1paco</div>
      </a>
      <a href="https://www.linkedin.com/in/dtodo1paco" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
        <div className="d-none d-print-block">dtodo1paco</div>
      </a>
      <a href="https://twitter.com/dtodo1paco" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        <div className="d-none d-print-block">dtodo1paco</div>
      </a>
    </div>
  </div>
);
export default Portrait;