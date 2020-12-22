import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ShortMessageProvider } from '../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage';
import ContextProvider from '../../GlobalLib/Context/Lib/ContextProvider';
import { DummyStateProvider } from '../../GlobalLib/Context/Lib/DummyState';
import GlobalStyles from '../../GlobalLib/Styles/GlobalStyle/GlobalStyles';
import Theme from '../../GlobalLib/Styles/GlobalStyle/Theme';
import App from './App';

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ContextProvider
        contexts={[ShortMessageProvider, DummyStateProvider]} //위에 배치될수록 더 하위의 컴포넌트가 된다.
      >
        <App />
      </ContextProvider>
    </ThemeProvider>
  );
};
