import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function despre() {
  return (
    <>
    
      <InfoSection {...homeObjOne} />
     
    
      <InfoSection {...homeObjThree} />
     
    </>
  );
}

export default despre;
