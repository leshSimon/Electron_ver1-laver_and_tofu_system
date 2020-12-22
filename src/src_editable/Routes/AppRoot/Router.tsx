import React from 'react';
import EditCon from '../Edit/EditCon';
import LookupCon from '../Lookup/LookupCon';

interface RouterProps {
  Mode: string;
}
const Router = ({ Mode }: RouterProps) => {
  switch (Mode) {
    case 'Edit':
      return <EditCon />;
    case 'Print':
      return <EditCon />;
    default:
      return <LookupCon />;
  }
};
export default Router;
