import React from 'react';
import useInfiniteScroll from '../../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll';
import { LookupOptionType } from '../../LookupCon';
import MaterialTablePre from './MaterialTablePre';

interface MaterialTableConProps {
  Setting: LookupOptionType;
}
const MaterialTableCon = ({ Setting }: MaterialTableConProps) => {
  const { List, Finish } = useInfiniteScroll();

  return <MaterialTablePre List={List} Finish={Finish} Setting={Setting} />;
};

export default MaterialTableCon;
