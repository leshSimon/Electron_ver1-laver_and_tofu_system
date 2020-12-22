import React from 'react';
import styled, { css } from 'styled-components';
import { W100per } from '../../../GlobalLib/Styles/IteratePattern/WH100per';

const MenuPence = styled(W100per)`
  display: flex;
  flex-direction: column;
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

interface SidebarMenuConProps {
  Mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}
const SidebarMenu = ({ Mode, setMode }: SidebarMenuConProps) => {
  return (
    <MenuPence>
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
    </MenuPence>
  );
};

export default SidebarMenu;
