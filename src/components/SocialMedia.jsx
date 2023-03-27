import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import resumeChinese from '../assets/简历.pdf';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href={resume} download="resume">RESUME</a>
    </div>
    <div>
      <a href={resumeChinese} download="简历">简历</a>
    </div>
    {/* <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
