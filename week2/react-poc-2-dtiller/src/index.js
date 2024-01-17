import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: "1", name: "Echo Lake", trailhead: "Echo Lake" },
  { id: "2", name: "Brown Lake", trailhead: "Brown Lake" },
  { id: "3", name: "Max Lake", trailhead: "Max Lake" },
];

function App({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById('root'));
