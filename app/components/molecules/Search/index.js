import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  textField: {
    width: '100%',
    height: 40
  },
  resize: {
    fontSize: 12
  },
  icon: {
    width: 20,
    height: 20
  }
});

const Search = (props) => {
  const { classes } = props;
  return (
    <div>
      <TextField
        id="outlined-full-width"
        label="Search"
        InputProps={{
          classes: {
            input: classes.resize
          },
          endAdornment: (
            <InputAdornment variant="filled" position="end">
              <IconButton onClick={() => {}}>
                <SearchIcon className={classes.icon} />
              </IconButton>
            </InputAdornment>
          )
        }}
        className={classes.textField}
        placeholder="Search by address, transaction hash or block number"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};
export default withStyles(styles)(Search);
