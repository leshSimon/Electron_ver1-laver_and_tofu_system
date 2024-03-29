import React, { useState } from 'react';
import styled from 'styled-components';
import SideBarCon from '../../Components/SideBar/SideBarCon';
import Router from './Router';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  color: white;
  background-color: #333333;
  max-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  const [Mode, setMode] = useState('LookUp');
  return (
    <Wrapper>
      <SideBarCon Mode={Mode} setMode={setMode} />
      <div />
      <Router Mode={Mode} />
    </Wrapper>
  );
};

export default App;
