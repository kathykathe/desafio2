import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialButton = ({ iconGit }) => {
  return (
    <div className="d-flex justify-content-center gap-3">
      {iconGit && (
        <div className="rounded-circle bg-light p-3">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </div>
      )}

      <div className="rounded-circle bg-light p-3">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </div>

      <div className="rounded-circle bg-light p-3">
        <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
      </div>
    </div>
  );
};

export default SocialButton;
