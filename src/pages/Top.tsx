import * as React from 'react';
import Counter from '~/containers/Counter';

const Top = (): React.ReactElement => {
  const counter = Counter.useContainer();

  return (
    <>
      <h2>Top Page</h2>
      <div>{counter.count}</div>
      <div>
        <button type="button" onClick={counter.increment}>
          +
        </button>
        <button type="button" onClick={counter.decrement}>
          -
        </button>
      </div>
    </>
  );
};

export default Top;
