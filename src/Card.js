import React, { useState } from 'react';
import PolicyHeader from './PolicyHeader';
import PolicyFooter from './PolicyFooter';

const Card = ({ data }) => {
  const [conditional, setConditional] = useState('');
  const conditionalHandler = () => {
    if (conditional === '') {
      setConditional('clicked');
    } else {
      setConditional('');
    }
  };
  return (
    <section
      onClick={() => conditionalHandler()}
      className={`card ${conditional}`}
    >
      <article className="card-content">
        <PolicyHeader data={data} isSelected={conditional !== ''} />
        <PolicyFooter data={data} />
      </article>
      <aside className="logo desktop">
        <img src={data.partner.logo} alt="logo" />
      </aside>
    </section>
  );
};

export default Card;
