import React from 'react';

const Plinko = () => {
  return (
    <>
      <h1>PlinkoJS</h1>
      <p>some text goes here</p>
      <figure>
        <img src="https://media.giphy.com/media/1rRkqtfEgsK57mgN52/giphy.gif" alt="Plinko Gameplay" />
        <figcaption>Actual recorded gameplay</figcaption>
      </figure>
      <p>
        Recently, I co-created an open-source multiplayer real-time browser-based physics game using JavaScript, Node.js, WebSockets and React. Using no client-side plugins and only relying on basic features of the browser, we built a client-server architecture to synchronize game state generated by a physics engine across the internet to multiple clients in real time, while facilitating live-action gameplay. We simulated a real time, lag free environment by analyzing state synchronization, binary data serialization, latency estimation, and protocol strategies.
      </p>
    </>
  );
}

export default Plinko;