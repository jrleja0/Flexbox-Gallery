import React from 'react';
import PropTypes from 'prop-types';

/*///
 COMPONENT
*////
const Main = props => {
  return (
    <div>
      <div>
        <h1>Image Gallery</h1>
        <div className="menu-options">
          <a role="button" tabIndex="0" onClick={() => console.log('1')}>Flex 1</a>
          <a role="button" tabIndex="0" onClick={() => console.log('2')}>Flex 2</a>
        </div>
      </div>
      {props.children}
      <div>
        <pre className="footer-text">
          <i className="fa fa-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2018
        </pre>
      </div>
    </div>
  );
};

export default Main;

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
};
