# use-debounce

> useDebounce

[![NPM](https://img.shields.io/npm/v/use-debounce.svg)](https://www.npmjs.com/package/use-debounce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-debounce
```

## Usage

```tsx
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
```

## License

MIT © [fulviocanducci](https://github.com/fulviocanducci)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
