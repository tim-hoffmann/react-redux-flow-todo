// @flow
import * as React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';

type Props = {
  onChange: Function,
  onSubmit: Function,
};

const TodoForm = ({ onChange, onSubmit }: Props) => (
  <FormControl component="fieldset">
    <TextField id="name" label="ToDo" name="name" margin="normal" onChange={onChange} />
    <Button onClick={onSubmit}>Create</Button>
  </FormControl>
);

export default TodoForm;
