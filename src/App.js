import React, { Component } from 'react';
import './stylesheets/App.css';
import { Segment } from 'semantic-ui-react';

import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: [],
    areas: [],
    selectedHost: null,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/hosts`)
      .then(res => res.json())
      .then(hosts => this.setState({ hosts }));

    fetch(`http://localhost:3000/areas`)
      .then(res => res.json())
      .then(areas => this.setState({ areas }));
  }

  coldStorageHosts = () => {
    return this.state.hosts.filter(host => !host.active);
  };

  activeHosts = () => {
    return this.state.hosts.filter(host => host.active);
  };

  setSelectedHost = host => {
    this.setState({ selectedHost: host });
  };

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          areas={this.state.areas}
          hosts={this.activeHosts()}
          selectedHost={this.state.selectedHost}
          setSelectedHost={this.setSelectedHost}
        />
        <Headquarters
          hosts={this.coldStorageHosts()}
          selectedHost={this.state.selectedHost}
          setSelectedHost={this.setSelectedHost}
        />
      </Segment>
    );
  }
}

export default App;
