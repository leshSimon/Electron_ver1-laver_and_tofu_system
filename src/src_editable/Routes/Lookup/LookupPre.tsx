import { product } from '@prisma/client';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  NOrU,
  NumberIntoDate,
} from '../../GlobalLib/RecycleFunction/etc/type_convert';
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
  padding: 20px 35px 10px 35px;
`;
const LoadingState = styled.div`
  font-size: 1.3rem;
  padding: 10px;
`;
interface RowProps {
  mode: string;
}
const Row = styled(W100per)<RowProps>`
  display: grid;
  ${(p) => {
    switch (p.mode) {
      case 'selling':
        return css`
          grid-template-columns: 1fr 1fr;
        `;
      case 'material':
        return css`
          grid-template-columns: 1fr 1fr;
        `;
      default:
        return css`
          grid-template-columns: 70px 1.45fr 1.6fr 1fr 1fr;
        `;
    }
  }}
  padding: 10px;
  border-bottom: 1px solid white;
`;
const Col = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Row mode={Setting.target}></Row>
        ) : Setting.target === 'material' ? (
          <Row mode={Setting.target}></Row>
        ) : (
          <>
            <Row mode={Setting.target}>
              <Col>ID</Col>
              <Col>날짜</Col>
              <Col>상품명</Col>
              <Col>전일 재고</Col>
              <Col>생산량</Col>
            </Row>
            {JsonData?.map(
              (
                i: product & {
                  goods: {
                    name: string | null;
                  };
                }
              ) => (
                <Row mode={Setting.target}>
                  <Col>{i.id}</Col>
                  <Col>{NumberIntoDate(i.date)}</Col>
                  <Col>{i.goods.name}</Col>
                  <Col>{i.Inventory}</Col>
                  <Col>{i.output}</Col>
                </Row>
              )
            )}
          </>
        )}
      </Table>
    </Background>
  );
};

export default LookupPre;
