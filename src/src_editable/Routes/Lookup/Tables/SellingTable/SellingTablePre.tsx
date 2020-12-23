import React from 'react';
import { LookupOptionType } from '../../LookupCon';
import SellingRows, { SellingRowStructure } from './SellingRows';

interface SellingTablePreProps {
  List: number[];
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const SellingTablePre = ({ List, Finish, Setting }: SellingTablePreProps) => {
  return (
    <>
      <SellingRowStructure
        id="ID"
        date="날짜"
        goods="상품명"
        consumer="거래처"
        quantity="수량"
        supply_price="공급가액"
        payment_date="입금날"
        payment_method="결제수단"
        remark="비고"
      />
      {List.map((i) => (
        <SellingRows
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

export default SellingTablePre;
