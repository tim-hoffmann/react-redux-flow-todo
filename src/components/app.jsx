// @flow
import * as React from 'react';

type Props = {
  children: Array<Object>,
};

const App = (props: Props) => (
  <div>
    <h1>ToDo</h1>
    {props.children}
  </div>
);

export default App;
