import React from 'react';
import styled from 'styled-components';
import { NOrU } from '../../GlobalLib/RecycleFunction/etc/type_convert';
import WH100per, {
  W100per,
} from '../../GlobalLib/Styles/IteratePattern/WH100per';
import ConditionCon from './Condition/ConditionCon';
import { LookupOptionType, lookUpType } from './LookupCon';

const Background = styled(WH100per)`
  display: flex;
  flex-direction: column;
`;
const Table = styled(WH100per)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const LoadingState = styled.div`
  font-size: 1.3rem;
  padding: 10px;
`;
const PrimeRow = styled(W100per)`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid white;
`;

interface LookupPreProps {
  Setting: LookupOptionType;
  JsonData: lookUpType;
}
const LookupPre = ({ Setting, JsonData }: LookupPreProps) => {
  console.log(JsonData);
  return (
    <Background>
      <ConditionCon Setting={Setting} />
      <Table>
        {NOrU(JsonData) ? (
          <LoadingState>Loading...</LoadingState>
        ) : Setting.target === 'selling' ? (
          <PrimeRow></PrimeRow>
        ) : Setting.target === 'material' ? (
          <PrimeRow></PrimeRow>
        ) : (
          <PrimeRow></PrimeRow>
        )}
      </Table>
    </Background>
  );
};

export default LookupPre;
