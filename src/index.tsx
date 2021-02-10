import React from 'react';
import { render } from 'react-dom';
import ContextApply from './src_editable/Routes/AppRoot/ContextApply';
import Helmet from 'react-helmet';
import './src_editable/GlobalLib/Styles/GlobalStyle/ImportGlobalCss.global.scss';

render(
  <>
    <Helmet>
      <title>Lavertu</title>
    </Helmet>
    <ContextApply />
  </>,
  document.getElementById('root')
);
