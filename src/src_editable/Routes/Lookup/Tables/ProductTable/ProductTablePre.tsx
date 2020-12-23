import React from 'react';
import { LookupOptionType } from '../../LookupCon';
import ProductRows, { ProductRowStructure } from './ProductRows';

interface ProductTablePreProps {
  List: number[];
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const ProductTablePre = ({ List, Finish, Setting }: ProductTablePreProps) => {
  return (
    <>
      <ProductRowStructure
        id="ID"
        date="날짜"
        goods="상품명"
        inventory="전일 재고"
        output="생산량"
      />
      {List.map((i) => (
        <ProductRows
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

export default ProductTablePre;
