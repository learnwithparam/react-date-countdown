import React from "react";
import DateCountdown from "react-date-countdown";

const CountdownRenderProps = ({ date }) => {
  return (
    <div className="countdown">
      <h3 className="header">Headless Countdown (using Render Props)</h3>
      <DateCountdown date={date}>
        {({ timeLeft, isValidDate, isValidFutureDate }) => (
          <React.Fragment>
            {!isValidDate && <div>Pass in a valid date props</div>}
            {!isValidFutureDate && (
              <div>
                Time up, let's pass a future date to procrastinate more{" "}
                <span role="img" aria-label="sunglass-emoji">
                  😎
                </span>
              </div>
            )}
            {isValidDate && isValidFutureDate && (
              <div>
                <strong className="countdown-header">{timeLeft.days} : </strong>
                <strong className="countdown-header">
                  {timeLeft.hours} :{" "}
                </strong>
                <strong className="countdown-header">
                  {timeLeft.minutes} :{" "}
                </strong>
                <strong className="countdown-header">{timeLeft.seconds}</strong>
              </div>
            )}
          </React.Fragment>
        )}
      </DateCountdown>
    </div>
  );
};

export default CountdownRenderProps;
