// @flow
import * as React from 'react';
import Typography from 'material-ui/Typography';
import Routes from '../routes';

const App = () => (
  <div>
    <Typography variant="headline" component="h1">
      TODOs
    </Typography>
    <Routes />
  </div>
);

export default App;
