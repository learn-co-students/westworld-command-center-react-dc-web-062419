import React from 'react';
import { Segment } from 'semantic-ui-react';

import Area from './Area';

const WestworldMap = ({ areas }) => {
  return (
    <Segment id="map">
      {areas.map(area => (
        <Area area={area} />
      ))}
    </Segment>
  );
};

export default WestworldMap;
