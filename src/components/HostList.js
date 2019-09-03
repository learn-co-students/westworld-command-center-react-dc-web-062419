import React from 'react';
import { Card } from 'semantic-ui-react';
import Host from './Host';

const HostList = ({ hosts, selectedHost, setSelectedHost }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {hosts.map(host => (
        <Host host={host} selectedHost={selectedHost} setSelectedHost={setSelectedHost} />
      ))}
    </Card.Group>
  );
};

export default HostList;
