import React from 'react';
import { render } from 'react-dom';
import ContextApply from './src_editable/Routes/AppRoot/ContextApply';
import Helmet from 'react-helmet';
import dotenv from 'dotenv';
import path from 'path';
import './src_editable/GlobalLib/Styles/GlobalStyle/ImportGlobalCss.global.scss';

dotenv.config({ path: path.join(__dirname, '/.env') });

render(
  <>
    <Helmet>
      <title>Lavertu</title>
    </Helmet>
    <ContextApply />
  </>,
  document.getElementById('root')
);
