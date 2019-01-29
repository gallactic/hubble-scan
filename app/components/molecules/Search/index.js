import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  textField: {
    width: '100%',
    height: 40,
    margin: theme.spacing.unit
  },
  resize: {
    fontSize: 12,
    color: 'white'
  },
  icon: {
    width: 20,
    height: 20,
    color: '#DFDFDF'
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#DFDFDF'
    },
    color: '#DFDFDF'
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#DFDFDF'
    }
  },
  notchedOutline: {
    borderColor: '#DFDFDF !important'
  },
  iconStyle: {
    color: '#DFDFDF'
  }
});

const Search = props => {
  const {
    classes, onSearch, onChange, value
  } = props;
  return (
    <div>
      <TextField
        id="outlined-full-width"
        label="Search"
        onChange={onChange}
        value={value}
        InputProps={{
          classes: {
            input: classes.resize,
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          endAdornment: (
            <InputAdornment variant="filled" position="end">
              <IconButton onClick={onSearch}>
                <SearchIcon className={classes.icon} />
              </IconButton>
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          },
          shrink: true
        }}
        className={classes.textField}
        placeholder="Search by address, transaction hash or block number"
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired
};

export default withStyles(styles)(Search);
