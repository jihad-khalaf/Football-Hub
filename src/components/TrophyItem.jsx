import React from 'react';
import '../styles/Club.css';

// One trophy in the trophy cabinet. PROPS: image, count (how many times won), name
const TrophyItem = ({ image, count, name }) => {
  return (
    <div className="trophy">
      <img src={image} alt={name + ' trophy'} />
      <b className="display"> {count} </b>
      <span> {name} </span>
    </div>
  );
};

export default TrophyItem;
