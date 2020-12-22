import React from 'react';
import styled, { css } from 'styled-components';
import WH100per, {
  W100per,
} from '../../GlobalLib/Styles/IteratePattern/WH100per';

const Pence = styled(WH100per)`
  display: flex;
  flex-direction: column;
  background-color: #262626;
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
interface MenuItemProps {
  CurrentMode: string;
  Mode: string;
}
const MenuItem = styled(W100per)<MenuItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  ${(p) => {
    if (p.CurrentMode === p.Mode) {
      return css`
        background-color: #b2bec3;
        color: black;
      `;
    }
    return css`
      background-color: #2d3436;
    `;
  }}
  font-size: 0.8rem;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
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
      <MenuItem
        onClick={() => {
          setMode('LookUp');
        }}
        CurrentMode="LookUp"
        Mode={Mode}
      >
        조회
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMode('Edit');
        }}
        CurrentMode="Edit"
        Mode={Mode}
      >
        편집
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMode('Print');
        }}
        CurrentMode="Print"
        Mode={Mode}
      >
        출력
      </MenuItem>
    </Pence>
  );
};

export default SideBarCon;
