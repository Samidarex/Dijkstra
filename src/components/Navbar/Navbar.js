import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  NavBtnIcon
} from './Navbar.elements';
import Lottie from 'react-lottie';
import * as loading from '../../images/logo.json';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const defaultOptions = {
    loop: true,
    autoplay: false, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            <Lottie options={defaultOptions} height={45} width={45}/>
              Dijkstra
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                 Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/despre' onClick={closeMobileMenu}>
                  About Dijkstra
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/exemple' onClick={closeMobileMenu}>
                  Examples
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='//localhost:8080' target='_blank'>
                    <Button primary>Search<NavBtnIcon /></Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='//localhost:8080' target='_blank'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Search
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
