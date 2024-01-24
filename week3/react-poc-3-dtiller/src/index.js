import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ task }) {
  const [checked, toggleState] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleState((checked) => !checked)}
      />
      <span>
        {task}: {checked}
      </span>
      {checked ? 'Complete' : 'In Progress'}
    </div>
  );
}

ReactDOM.render(
  <>
    <App task="Wash the dishes" />,
    <App task="Fold the laundry" />,
  </>,
  document.getElementById('root')
);
