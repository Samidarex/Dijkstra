import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import Parallax from 'react-rellax';
function exemple() {
  return (
    <>

      <InfoSection {...homeObjOne} />
    
      
      <InfoSection {...homeObjTwo} />
      
    </>
  );
}

export default exemple;
