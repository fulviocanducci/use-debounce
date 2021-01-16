import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import typeText from './typeText.png';

const App = () => {
  const [value, setValue] = useState('');
  const text = useDebounce(value);
  return (
    <div className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
        <img className="me-3" src={typeText} alt="" width="48" height="38" />
        <div className="lh-1">
          <h1 className="h6 mb-0 text-white lh-1">useDebounce - Type Text</h1>
          <small>npmj package</small>
        </div>
      </div>
      <div className="bg-default">
        <div className="input-text">
          <label className="form-label" htmlFor="t1">
            <strong>Write text:</strong>
          </label>
          <input
            type="text"
            id="t1"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mt-5">
          <h3>Resume:</h3>
          <hr />
        </div>
        <div className="mt-3">
          <strong>Last typing: </strong>
          {text || 'no typing or empty type'}
        </div>
        <div className="">
          <strong>Length typing: </strong>
          {text?.length ?? 0}
        </div>
      </div>
      <div className="mt-5">
        <h3>Download the package at the addresses below</h3>
        <hr />
        <ul>
          <li>
            <div>
              <strong>npmjs package: </strong>
              <a
                href="https://www.npmjs.com/package/use-debounce-hook"
                target="_blank"
                rel="noopener noreferrer"
              >
                package use-debounce-hook
              </a>
            </div>
          </li>
          <li>
            <div>
              <strong>github repository package: </strong>
              <a
                href="https://github.com/fulviocanducci/use-debounce#readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                github use-debounce-hook
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
