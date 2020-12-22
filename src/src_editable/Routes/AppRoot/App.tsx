import React, { useState } from "react";
import styled from "styled-components";
import SideBarCon from "../../Components/SideBar/SideBarCon";
import Router from "./Router";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  color: white;
  background-color: #333333;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const [Mode, setMode] = useState("LookupCon");
  return (
    <Wrapper>
      <SideBarCon />
      <Router Mode={Mode} />
    </Wrapper>
  );
};

export default App;
