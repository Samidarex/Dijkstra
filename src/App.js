import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import Acasa from './pages/acasa/acasa';
import despre from './pages/despre/despre';
import exemple from './pages/exemple/exemple';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Lottie from 'react-lottie';
import * as loading from './images/lll.json';
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    
    <Router>
      <div>
      {isLoading==true?
      <Lottie options={defaultOptions}
      height={800}
      width={600}/>:
     <> <GlobalStyle />
 
      <ScrollToTop />
      <Navbar />
      <Switch>
        
        <Route path='/dijkstra' exact component={Acasa} />
        <Route path='/despre' component={despre} />
        <Route path='/exemple' component={exemple} />

      </Switch>
      <Footer />
      </> 
}
   </div>
    </Router>
  );
}

export default App;
