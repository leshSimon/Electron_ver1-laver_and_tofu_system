import {
  material_input_and_output,
  Prisma,
  product,
  selling,
} from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { DateIntoNumber } from '../../GlobalLib/RecycleFunction/etc/type_convert';
import usePrisma from '../../GlobalLib/RecycleFunction/Hooks/usePrisma';
import LookupPre from './LookupPre';

export interface LookupOptionType {
  target: string;
  businessUnit: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  order: string;
}
export type lookUpType =
  | selling[]
  | material_input_and_output[]
  | product[]
  | null
  | undefined;

const LookupCon = () => {
  const prisma = usePrisma();
  const [Setting, setSetting] = useState({
    target: 'product',
    businessUnit: 0,
    startDate: {
      year: 2020,
      month: 1,
      day: 1,
    },
    endDate: {
      year: 2020,
      month: 12,
      day: 31,
    },
    order: 'desc',
  });
  const [JsonData, setJsonData] = useState<lookUpType>();

  const Lookup = async ({
    target,
    businessUnit,
    startDate,
    endDate,
    order,
  }: LookupOptionType) => {
    let JsonDataSet: lookUpType;
    let where:
      | Prisma.productWhereInput
      | Prisma.material_input_and_outputWhereInput
      | Prisma.sellingWhereInput = {
      date: {
        gte: DateIntoNumber(startDate.year, startDate.month, startDate.day),
        lte: DateIntoNumber(endDate.year, endDate.month, endDate.day),
      },
    };
    const orderBy: Prisma.productOrderByInput = {
      date: order === 'desc' ? 'desc' : 'asc',
    };
    if (businessUnit !== 0) {
      if (target === 'meterial_input_and_output') {
        where = { ...where, material: { business_unit_id: businessUnit } };
      } else {
        where = { ...where, goods: { business_unit_Id: businessUnit } };
      }
    }
    switch (target) {
      case 'selling':
        JsonDataSet = await prisma.selling.findMany({
          where,
          orderBy,
        });
        break;
      case 'meterial_input_and_output':
        JsonDataSet = await prisma.material_input_and_output.findMany({
          where,
          orderBy,
        });
        break;
      default:
        JsonDataSet = await prisma.product.findMany({
          where,
          orderBy,
        });
    }
    setJsonData(JsonDataSet);
  };

  useEffect(() => {
    Lookup(Setting);
  }, []);

  return <LookupPre Setting={Setting} JsonData={JsonData} />;
};

export default LookupCon;
