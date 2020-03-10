/*
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from 'components/Header/Loadable';

const stateSelector = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

interface Props { }

function LoginPage(props: Props) {
  useInjectReducer({ key: 'loginPage', reducer: reducer });
  useInjectSaga({ key: 'loginPage', saga: saga });

  const { loginPage } = useSelector(stateSelector);
  const dispatch = useDispatch();

  console.log(dispatch);
  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Header />
    </div>
  );
}

export default memo(LoginPage);
