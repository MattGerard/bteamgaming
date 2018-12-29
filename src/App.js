import React, { Component } from 'react';
import './App.css';
import vid from './Loop2optomized.mp4';
import discord from './Discord-Logo+Wordmark-White.png';
import styled from 'styled-components';

const DiscordLink = styled.a`
  position: absolute;
  padding: 20px;
  display: block;
  z-index: 2;
  img {
    position: relative;
    width: 300px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiscordLink href="https://discord.gg/bt" target="_self">
          <img src={discord} alt="discord" />
        </DiscordLink>
        <video autoPlay={true} loop={true} src={vid} />
      </div>
    );
  }
}

export default App;
