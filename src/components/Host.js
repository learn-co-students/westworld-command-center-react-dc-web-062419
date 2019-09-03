import React from 'react';
import '../stylesheets/Host.css';
import { Card } from 'semantic-ui-react';

const Host = ({ host, selectedHost, setSelectedHost }) => {
  return (
    <Card
      className={`host ${host === selectedHost ? 'selected' : ''}`}
      onClick={() => setSelectedHost(host)}
      image={host.imageUrl}
      raised
    />
  );
};

export default Host;
