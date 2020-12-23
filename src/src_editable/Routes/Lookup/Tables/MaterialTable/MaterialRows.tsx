import { material_input_and_output, Prisma } from '@prisma/client';
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

export type material_input_and_outputForTable = material_input_and_output & {
  material: {
    name: string;
    unit: string;
  };
};
interface MaterialRowsProps {
  skip?: number;
  take?: number;
  Finish: React.MutableRefObject<boolean>;
  Setting: LookupOptionType;
}
const MaterialRows = ({
  skip = 0,
  take = 30,
  Finish,
  Setting,
}: MaterialRowsProps) => {
  const prisma = usePrisma();
  const [JsonData, setJsonData] = useState<
    material_input_and_outputForTable[]
  >();

  const Lookup = async (Setting: LookupOptionType) => {
    const { businessUnit, startDate, endDate, order } = Setting;
    let where: Prisma.material_input_and_outputWhereInput = {
      date: {
        gte: DateIntoNumber(startDate.year, startDate.month, startDate.day),
        lte: DateIntoNumber(endDate.year, endDate.month, endDate.day),
      },
    };
    if (businessUnit !== 0) {
      where = { ...where, material: { business_unit_id: businessUnit } };
    }
    const JsonDataSet = await prisma.material_input_and_output.findMany({
      where,
      include: {
        material: { select: { name: true, unit: true } },
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
      {JsonData?.map((i: material_input_and_outputForTable) => (
        <MaterialRowsStructure
          key={i.id}
          id={i.id}
          date={NumberIntoDate(i.date)}
          materialName={i.material.name}
          inventory={
            String(i.inventory.toFixed(2)) + ' (' + i.material.unit + ')'
          }
          added={i.added}
        />
      ))}
    </Container>
  );
};
export default MaterialRows;

interface MaterialRowsStructureProps {
  id: any;
  date: any;
  materialName: any;
  inventory: any;
  added: any;
}
export const MaterialRowsStructure = ({
  id,
  date,
  materialName,
  inventory,
  added,
}: MaterialRowsStructureProps) => (
  <Row>
    <Col>{id}</Col>
    <Col>{date}</Col>
    <Col>{materialName}</Col>
    <Col>{inventory}</Col>
    <Col>{added}</Col>
  </Row>
);
