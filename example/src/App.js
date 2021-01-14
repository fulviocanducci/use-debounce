import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';


const App = () => {
  const [value, setValue] = useState('');
  const text = useDebounce(value);
  return (
    <div>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>{text}</div>
    </div>
  );
};
export default App;
