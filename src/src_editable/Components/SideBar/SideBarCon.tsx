import React from 'react';
import styled from 'styled-components';
import { W100per } from '../../GlobalLib/Styles/IteratePattern/WH100per';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const Pence = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #262626;
  width: 180px;
  height: 100vh;
`;
const Title = styled(W100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  height: 70px;
  padding: 0 0 0 15px;
`;
const SubTitle = styled.div`
  font-size: 0.9rem;
`;

interface SideBarConProps {
  Mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}
const SideBarCon = ({ Mode, setMode }: SideBarConProps) => {
  return (
    <Pence>
      <Title>
        <div>Lavertu</div>
        <SubTitle>(김, 두부 관리 시스템)</SubTitle>
      </Title>
      <SidebarMenu Mode={Mode} setMode={setMode} />
    </Pence>
  );
};

export default SideBarCon;
