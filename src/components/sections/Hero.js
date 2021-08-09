import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

// define custom prop types
const propTypes = {
  ...SectionProps.types
}
// define default prop types
const defaultProps = {
  ...SectionProps.defaults
}
// define the prrops to be used in this component
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
// define the state for the video modal
  const [videoModalActive, setVideomodalactive] = useState(false);

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  // define additional classes for the Hero component
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            {/* main title of page */}
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to <span className="text-color-primary">Central</span>.<br/>
              The most productive CLI<br/>environment for <span className="text-color-primary">all developers</span>.
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                {/* main description of front page */}
                From transforming your GitHub workflow to a faster routine to squashing bugs, Central has the tools you need for your development needs.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/* define three buttons */}
                <ButtonGroup>
                  <Button tag="a" color="primary" href="/Demo" wideMobile>Try Demo</Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/jordanhilado/central-website" target="_blank" rel="noopener noreferrer">View on Github</Button>
                  <Button tag="a" color="dark" wideMobile href="https://central-1.gitbook.io/central/" target="_blank" rel="noopener noreferrer">Documentation</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          <Image className="has-shadow" alt="Hero" width={896} height={504} src={require('../../assets/images/giphy.gif')}/>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;