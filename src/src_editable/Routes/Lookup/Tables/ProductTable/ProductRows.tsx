import { Prisma, product } from '@prisma/client';
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
  grid-template-columns: 70px 1.45fr 1.6fr 1fr 1fr;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid white;
`;
const Col = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type productForTable = product & {
  goods: {
    name: string | null;
  };
};
interface ProductRowsProps {
  skip?: number;
  take?: number;
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const ProductRows = ({
  skip = 0,
  take = 30,
  Finish,
  Setting,
}: ProductRowsProps) => {
  const prisma = usePrisma();
  const [JsonData, setJsonData] = useState<productForTable[]>();

  const Lookup = async (Setting: LookupOptionType) => {
    const { businessUnit, startDate, endDate, order } = Setting;
    let where: Prisma.productWhereInput = {
      date: {
        gte: DateIntoNumber(startDate.year, startDate.month, startDate.day),
        lte: DateIntoNumber(endDate.year, endDate.month, endDate.day),
      },
    };
    if (businessUnit !== 0) {
      where = { ...where, goods: { business_unit_Id: businessUnit } };
    }
    const JsonDataSet = await prisma.product.findMany({
      where,
      include: {
        goods: { select: { name: true } },
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
      {JsonData?.map((i: productForTable) => (
        <ProductRowStructure
          key={i.id}
          id={i.id}
          date={NumberIntoDate(i.date)}
          goods={i.goods.name}
          inventory={i.Inventory}
          output={i.output}
        />
      ))}
    </Container>
  );
};
export default ProductRows;

interface ProductRowStructureProps {
  id: any;
  date: any;
  goods: any;
  inventory: any;
  output: any;
}
export const ProductRowStructure = ({
  id,
  date,
  goods,
  inventory,
  output,
}: ProductRowStructureProps) => (
  <Row>
    <Col>{id}</Col>
    <Col>{date}</Col>
    <Col>{goods}</Col>
    <Col>{inventory}</Col>
    <Col>{output}</Col>
  </Row>
);
