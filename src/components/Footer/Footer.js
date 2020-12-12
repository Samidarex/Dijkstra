import React from 'react';
import { Button } from '../../globalStyles';
import Parallax from 'react-rellax';
import {
  FaBusAlt,
  FaBus
} from 'react-icons/fa';
import {ReactComponent as TravelLogo} from '../../images/footer.svg';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { ReactComponent as Wave } from './wave.svg';
import { ReactComponent as Wave1 } from './wave1.svg';
import Lottie from 'react-lottie';
import * as loading from '../../images/logo.json';
import * as travel from '../../images/39612-location-animation.json';

function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const Travel = {
    loop: true,
    autoplay: true, 
    animationData: travel.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    
    <Parallax speed={-3}>
    <Wave1 />     
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>

        <Lottie options={Travel}/>
        
          <FooterLinkItems>
          <Fade top><FooterLinkTitle>Bus routes:</FooterLinkTitle></Fade>
          <Slide left><FooterLink to='//localhost:8080/route/_94ieglesj1606386330254' target='_blank'><FaBusAlt></FaBusAlt> ‏‏‎ Bus 5</FooterLink></Slide>
            <Slide left><FooterLink to='//localhost:8080/route/_4quktwjsk1606386912362' target='_blank'><FaBusAlt></FaBusAlt> ‏‏‎ ‎Bus 19</FooterLink></Slide>
            <Slide left><FooterLink to='//localhost:8080/route/_11zykox7a1606387211095' target='_blank'><FaBusAlt></FaBusAlt> ‏‏‎ ‎Bus 23</FooterLink></Slide>
            <Slide left><FooterLink to='//localhost:8080/route/_4432lum381606387329833' target='_blank'><FaBusAlt></FaBusAlt> ‏‏‎ Bus 26</FooterLink></Slide>
          </FooterLinkItems>
  
          <FooterLinkItems>
          <Fade top><FooterLinkTitle>Trolleybuse routes:</FooterLinkTitle></Fade>
          <Slide left><FooterLink to='//localhost:8080/route/_uayxdmuu91606387461436' target='_blank'><FaBus></FaBus>‎‎‎ ‎‏‏‎ ‎Trolleybus 10</FooterLink></Slide>
          <Slide left><FooterLink to='//localhost:8080/route/_hx83wtv9o1606388011325' target='_blank'><FaBus></FaBus> ‏‏‎ Trolleybus 16</FooterLink></Slide>
          <Slide left><FooterLink to='//localhost:8080/route/_pa8781jrt1606387970601' target='_blank'><FaBus></FaBus> ‏‏‎ Trolleybus 26</FooterLink></Slide>
          <Slide left><FooterLink to='//localhost:8080/route/_tntvjkf0y1606388061776' target='_blank'><FaBus></FaBus> ‏‏‎ ‎Trolleybus 29</FooterLink></Slide>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
          <Fade top><Lottie options={defaultOptions} height={45} width={45}/></Fade>
            <Slide left> Dijkstra  </Slide>                                  
          </SocialLogo>
         <Slide right> <WebsiteRights>Algoritmul Dijkstra © 2020</WebsiteRights></Slide>
          </SocialMediaWrap>
          </SocialMedia>
          <Wave />
    </FooterContainer>
    </Parallax>
  );
}

export default Footer;
