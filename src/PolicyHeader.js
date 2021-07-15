import React from 'react';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PolicyHeader = ({ data, isSelected }) => {
  return (
    <header className="policyHeader">
      {isSelected ? (
        <div className="toggle selected">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      ) : (
        <div className="toggle">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
      <section className="policyHeader-description">
        <h4>{data.title}</h4>
        <p>
          {data.id} | {data.description}
        </p>
      </section>
      <aside className="logo tablet">
        <img src={data.partner.logo} alt="logo" />
      </aside>
    </header>
  );
};

export default PolicyHeader;
