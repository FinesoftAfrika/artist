import React from 'react';

import config from '../../config';
const pic = require('../assets/images/masautilogo.png');

export default function Footer() {
  return (
    <header>

      <img height="298px" src={pic} alt="" />
      <h1>{config.authorName}</h1>

    </header>
  );
}
