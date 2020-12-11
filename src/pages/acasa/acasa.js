import React, { useState, useEffect } from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection} from '../../components';
import Parallax from 'react-rellax';



function Acasa() {

  return (
    <>
      <Parallax speed={-5}>
      
      <InfoSection {...homeObjOne} />
      
      </Parallax>
      <Parallax speed={5}>
      <InfoSection {...homeObjThree} />
      </Parallax>
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Acasa;
