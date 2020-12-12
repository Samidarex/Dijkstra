import Typical from 'react-typical';
import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Lottie from 'react-lottie';
import * as loading from './images/38577-plan-for-business-gowth.json';
import * as aa from './images/aa.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOptions1 = {
  loop: true,
  autoplay: true, 
  animationData: aa.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: <Fade top>Dijkstra algorithm</Fade>,
  headline: <Slide right>Save your time</Slide>,
  description:
  <Slide left>
  Algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. </Slide>,
  buttonLabel: 'Try for yourself',
  imgStart: '',
  vrb: <Lottie options={defaultOptions}/>,
  img:'',
  alt: '',
  start: ''
};

export const homeObjTwo = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Graph theory',
  headline: 'Extremely popular, used by top companies',
  description:
    "Google Maps, Social Networking Applications, Telephone Network, IP routing to find Open shortest Path First uses Dijkstra's algorithm.",
  buttonLabel: <Jump>More about</Jump>,
  imgStart: '',
  vrb:<Lottie options={defaultOptions1}/>,
  img: '',
  alt: '',
  start: ''
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Edsger Wybe Dijkstra',
  headline:
  <Typical
  steps={['Computer scientist', 1000, 'Programmer', 500, 'Software engineer', 1000, 'Systems scientist', 1000, 'Science essayist', 1000, 'And pioneer in computing science ',1000 ,'Popular for his algorithm', 3000]}  loop={Infinity}
  wrapper="p"
/>,
  buttonLabel:<Jump>More about</Jump>,
  imgStart: 'start',
  img: require('./images/dijkstra.png'),
  alt: 'Vault',
  start: 'true'
};

//  steps={['Computer scientist', 1000, 'Programmer', 500, 'Software engineer', 1000, 'Systems scientist', 1000, 'Science essayist', 1000, 'And pioneer in computing science ',1000 ,'Popular for his algorithm', 3000]}

