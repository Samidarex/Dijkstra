import React from 'react';
import { InfoSection } from '../../components';
import { homeObjThree } from './Data';
import Parallax from 'react-rellax';

function Map() {
  return (
    <>
      <Parallax speed={-5}>
      <InfoSection {...homeObjThree} />
      </Parallax>
    </>
  );
}

export default Map;
