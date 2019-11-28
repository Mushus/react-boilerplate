import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Top from '~/pages/Top';
import About from '~/pages/About';
import Counter from '~/containers/Counter';

const App = (): React.ReactElement => (
  <BrowserRouter>
    <Counter.Provider>
      <h1>React Boilerplate!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </Counter.Provider>
  </BrowserRouter>
);

export default App;
