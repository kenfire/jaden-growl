# growl

> Jaden test done by Kenzo Hosomi

[![NPM](https://img.shields.io/npm/v/growl.svg)](https://www.npmjs.com/package/growl) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save growl
```

## Usage

```jsx
import React from 'react'

import { Link } from 'react-router-dom'
import { useGrowl, Growl } from 'growl'

import 'growl/dist/index.css'
import logo from './logo.svg'

function App() {
  const [active, setActive] = useGrowl()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Link className='App-link' to='/other'>
          Go to the Other component
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className='App-link' href='#' onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message='Hello World!'
      />
    </div>
  )
}

export default App
```

## License

MIT © [kenfire](https://github.com/kenfire)
