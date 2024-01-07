import React from 'react';
import ParentComponent from './_components/ParentComponent';
import ParentComp from './_component/ParentComp';
import { Divider } from '@mui/material';

function page() {
  return (
    <div>
      <ParentComponent/>
      <br/>
      <Divider/>
      <ParentComp/>
    </div>
  );
}

export default page;
