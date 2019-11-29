import * as React from 'react';
import Counter from '~/containers/Counter';
import Button from '~/components/Button';

const Top = (): React.ReactElement => {
  const counter = Counter.useContainer();

  return (
    <>
      <h2>Top Page</h2>
      <div>{counter.count}</div>
      <div>
        <Button onClick={counter.increment}>+</Button>
        <Button onClick={counter.decrement}>-</Button>
      </div>
    </>
  );
};

export default Top;
