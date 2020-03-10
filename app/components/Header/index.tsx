/**
 *
 * Header
 *
 */
import React, { memo } from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface Props { }

function Header(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Toolbar>
          <img src="https://askvietnamese.vn/themes/askvietnamese/assets/images/logo.png" alt="AskVietnamese" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(Header);
