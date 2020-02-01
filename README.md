# react-date-countdown

>

[![NPM](https://img.shields.io/npm/v/react-date-countdown.svg)](https://www.npmjs.com/package/react-date-countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-date-countdown
```

## Usage

```jsx
import React, { Component } from "react";

import DateCountdown from "react-date-countdown";

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

Check the example folder for real example.

## License

MIT © [Param-Harrison](https://github.com/Param-Harrison)
