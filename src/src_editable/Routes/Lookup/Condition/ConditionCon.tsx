import React from 'react';
import styled from 'styled-components';
import { W100per } from '../../../GlobalLib/Styles/IteratePattern/WH100per';
import { LookupOptionType } from '../LookupCon';

const Condition = styled(W100per)`
  background-color: #595959;
  flex-direction: column;
  padding: 20px;
`;
const SearchTarget = styled(W100per)`
  font-size: 1.4rem;
`;
const BusinessUnitName = styled(W100per)`
  padding: 25px 0 0 7px;
  font-size: 1.05rem;
`;
const Term = styled(W100per)`
  padding: 15px 0 0 7px;
  font-size: 0.85rem;
`;

interface ConditionConProps {
  Setting: LookupOptionType;
}
const ConditionCon = ({ Setting }: ConditionConProps) => {
  const { target, businessUnit, startDate, endDate, order } = Setting;
  return (
    <Condition>
      <SearchTarget>
        {target === 'selling'
          ? '출고 기록'
          : target === 'material'
          ? '재료 수불'
          : '생산 기록'}
      </SearchTarget>
      <BusinessUnitName>
        {businessUnit === 0 ? '사업단 전체' : '두부 사업단'}
      </BusinessUnitName>
      <Term>{`${startDate.year}. ${startDate.month}. ${startDate.day}. ~ ${
        endDate.year
      }. ${endDate.month}. ${endDate.day}. ${
        order === 'desc' ? '내림차순' : '오름차순'
      }`}</Term>
    </Condition>
  );
};

export default ConditionCon;
