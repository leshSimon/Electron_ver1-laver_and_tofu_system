import React from 'react';
import { render } from 'react-dom';
import ContextApply from './src_editable/Routes/AppRoot/ContextApply';
import Helmet from 'react-helmet';
import './src_editable/GlobalLib/Styles/GlobalStyle/ImportGlobalCss.global.scss';
import { createConnection } from 'typeorm';

createConnection({
  type: 'sqlite',
  synchronize: true,
  logging: true,
  logger: 'simple-console',
  database: './Assets/ExternalFile/LavertuDatabase.db',
  entities: [],
}).then(() => {
  render(
    <>
      <Helmet>
        <title>Lavertu</title>
      </Helmet>
      <ContextApply />
    </>,
    document.getElementById('root')
  );
});
