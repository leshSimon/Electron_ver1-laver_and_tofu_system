import React from 'react';
import useInfiniteScroll from '../../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll';
import { LookupOptionType } from '../../LookupCon';
import ProductTablePre from './ProductTablePre';

interface ProductTableConProps {
  Setting: LookupOptionType;
}
const ProductTableCon = ({ Setting }: ProductTableConProps) => {
  const { List, Finish } = useInfiniteScroll();

  return <ProductTablePre List={List} Finish={Finish} Setting={Setting} />;
};

export default ProductTableCon;
