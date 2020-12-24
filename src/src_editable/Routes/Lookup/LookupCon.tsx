import React, { useState } from 'react';
import LookupPre from './LookupPre';

export interface LookupOptionType {
  target: 'product' | 'selling' | 'material';
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
const LookupCon = () => {
  const [Setting, setSetting] = useState<LookupOptionType>({
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

  return <LookupPre Setting={Setting} />;
};

export default LookupCon;
