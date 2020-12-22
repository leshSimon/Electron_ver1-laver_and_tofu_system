import React from 'react';
import { render } from 'react-dom';
import './src_editable/GlobalLib/Styles/GlobalStyle/GlobalStyles.scss';
import ContextApply from './src_editable/Routes/AppRoot/ContextApply';
import Helmet from 'react-helmet';

render(
  <>
    <Helmet>
      <title>Lavertu</title>
    </Helmet>
    <ContextApply />
  </>,
  document.getElementById('root')
);
