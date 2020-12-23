import React from 'react';
import styled from 'styled-components';
import WH100per, {
  W100per,
} from '../../GlobalLib/Styles/IteratePattern/WH100per';

const Background = styled(WH100per)`
  display: flex;
`;
const BusinessUnitName = styled(W100per)`
  padding: 20px;
  font-size: 1.4rem;
`;

const StartingMain = () => {
  return (
    <Background>
      <BusinessUnitName>두부 사업단</BusinessUnitName>
    </Background>
  );
};

export default StartingMain;
