import { Prisma, selling } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  DateIntoNumber,
  NumberIntoDate,
} from '../../../../GlobalLib/RecycleFunction/etc/type_convert';
import usePrisma from '../../../../GlobalLib/RecycleFunction/Hooks/usePrisma';
import WH100per, {
  W100per,
} from '../../../../GlobalLib/Styles/IteratePattern/WH100per';
import { LookupOptionType } from '../../LookupCon';

const Container = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Row = styled(W100per)`
  display: grid;
  grid-template-columns: 65px 1.45fr 1.6fr 1.8fr 1fr 1.2fr 1.1fr 1fr 0.9fr;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid white;
  font-size: 0.9rem;
`;
const Col = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type sellingForTable = selling & {
  goods: {
    name: string;
  };
  payment_method: {
    name: string;
  };
};
interface SellingRowsProps {
  skip?: number;
  take?: number;
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const SellingRows = ({
  skip = 0,
  take = 30,
  Finish,
  Setting,
}: SellingRowsProps) => {
  const prisma = usePrisma();
  const [JsonData, setJsonData] = useState<sellingForTable[]>();

  const Lookup = async (Setting: LookupOptionType) => {
    const { businessUnit, startDate, endDate, order } = Setting;
    let where: Prisma.sellingWhereInput = {
      date: {
        gte: DateIntoNumber(startDate.year, startDate.month, startDate.day),
        lte: DateIntoNumber(endDate.year, endDate.month, endDate.day),
      },
    };
    if (businessUnit !== 0) {
      where = { ...where, goods: { business_unit_Id: businessUnit } };
    }
    const JsonDataSet = await prisma.selling.findMany({
      where,
      include: {
        goods: { select: { name: true } },
        payment_method: { select: { name: true } },
      },
      orderBy: {
        date: order === 'desc' ? 'desc' : 'asc',
      },
      skip,
      take,
    });

    setJsonData(JsonDataSet);
    if (!JsonDataSet || JsonDataSet.length === 0) {
      Finish.current = true;
    }
  };

  useEffect(() => {
    Lookup(Setting);
  }, []);

  return (
    <Container>
      {JsonData?.map((i: sellingForTable) => (
        <SellingRowStructure
          key={i.id}
          id={i.id}
          date={NumberIntoDate(i.date)}
          goods={i.goods.name}
          consumer={i.consumer}
          quantity={i.quantity}
          supply_price={i.supply_price}
          payment_date={i.payment_date ? NumberIntoDate(i.payment_date) : null}
          payment_method={i.payment_method.name}
          remark={i.remark}
        />
      ))}
    </Container>
  );
};
export default SellingRows;

interface SellingRowStructureProps {
  id: any;
  date: any;
  goods: any;
  consumer: any;
  quantity: any;
  supply_price: any;
  payment_date: any;
  payment_method: any;
  remark: any;
}
export const SellingRowStructure = ({
  id,
  date,
  goods,
  consumer,
  quantity,
  supply_price,
  payment_date,
  payment_method,
  remark,
}: SellingRowStructureProps) => (
  <Row>
    <Col>{id}</Col>
    <Col>{date}</Col>
    <Col>{goods}</Col>
    <Col>{consumer}</Col>
    <Col>{quantity}</Col>
    <Col>{supply_price}</Col>
    <Col>{payment_date ? payment_date : ''}</Col>
    <Col>{payment_method}</Col>
    <Col>{remark ? remark : ''}</Col>
  </Row>
);
