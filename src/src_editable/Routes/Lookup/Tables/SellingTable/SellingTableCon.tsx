import React from 'react';
import useInfiniteScroll from '../../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll';
import { LookupOptionType } from '../../LookupCon';
import SellingTablePre from './SellingTablePre';

interface SellingTableConProps {
  Setting: LookupOptionType;
}
const SellingTableCon = ({ Setting }: SellingTableConProps) => {
  const { List, Finish } = useInfiniteScroll();

  return <SellingTablePre List={List} Finish={Finish} Setting={Setting} />;
};

export default SellingTableCon;
