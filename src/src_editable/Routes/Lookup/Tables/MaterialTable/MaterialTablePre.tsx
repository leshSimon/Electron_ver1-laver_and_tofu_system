import React from 'react';
import { LookupOptionType } from '../../LookupCon';
import MaterialRows, { MaterialRowsStructure } from './MaterialRows';

interface MaterialTablePreProps {
  List: number[];
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const MaterialTablePre = ({ List, Finish, Setting }: MaterialTablePreProps) => {
  return (
    <>
      <MaterialRowsStructure
        id="ID"
        date="날짜"
        materialName="재료명"
        inventory="전일 재고"
        added="입고량"
      />
      {List.map((i) => (
        <MaterialRows
          key={i}
          skip={i * 30}
          take={30}
          Finish={Finish}
          Setting={Setting}
        />
      ))}
    </>
  );
};

export default MaterialTablePre;
