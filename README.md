# react-headless-countdown

> React date countdown using render props. Support for hooks is on its way :)

[![NPM](https://img.shields.io/npm/v/react-headless-countdown.svg)](https://www.npmjs.com/package/react-headless-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-headless-countdown
```

## Usage

```jsx
import React, { Component } from "react";

import DateCountdown from "react-headless-countdown";

class Example extends Component {
  render() {
    const date = new Date("2021-01-01"); // New year 2021!

    return (
      <DateCountdown date={date}>
        {({ timeLeft, isValidDate, isValidFutureDate }) => (
          <div>Render the countdown here!</div>
        )}
      </DateCountdown>
    );
  }
}
```

Example in action [here](https://learnwithparam.github.io/react-headless-countdown/).
You can checkout the examples folder for how to use it.

## License

MIT © [Param-Harrison](https://github.com/Param-Harrison)
