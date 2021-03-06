import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
// import FooterNav from './partials/FooterNav';
// import FooterSocial from './partials/FooterSocial';

// set prop types for dividers
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

//set default props for the dividers
const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

// set footer
const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            {/* <FooterSocial /> */}
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            {/* <FooterNav /> */}
            <div className="footer-copyright">Made with 🤍 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/jordanhilado">Jordan Hilado</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/masterchief01">Pranjal Walia</a>, and <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chayan-19">Chayan Chawra </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;