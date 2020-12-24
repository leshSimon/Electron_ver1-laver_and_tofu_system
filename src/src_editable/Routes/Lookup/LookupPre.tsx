import React from 'react';
import styled from 'styled-components';
import WH100per from '../../GlobalLib/Styles/IteratePattern/WH100per';
import ConditionCon from './Condition/ConditionCon';
import { LookupOptionType } from './LookupCon';
// import MaterialTableCon from './Tables/MaterialTable/MaterialTableCon';
// import SellingTableCon from './Tables/SellingTable/SellingTableCon';
import ProductTableCon from './Tables/ProductTable/ProductTableCon';

const Background = styled(WH100per)`
  display: flex;
  flex-direction: column;
`;
const Table = styled(WH100per)`
  display: flex;
  flex-direction: column;
  padding: 20px 35px 10px 35px;
`;

interface LookupPreProps {
  Setting: LookupOptionType;
}
const LookupPre = ({ Setting }: LookupPreProps) => {
  return (
    <Background>
      <ConditionCon Setting={Setting} />
      <Table>
        {/* {Setting.target === 'selling' ? (
          <SellingTableCon Setting={Setting} />
        ) : Setting.target === 'material' ? (
          <MaterialTableCon Setting={Setting} />
        ) : (
          <ProductTableCon Setting={Setting} />
        )} */}
        <ProductTableCon Setting={Setting} />
      </Table>
    </Background>
  );
};

export default LookupPre;
