/* eslint-disable import/no-extraneous-dependencies */
import React, {
  Suspense, useRef, useState,
} from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './assets/less/common.less';
import './assets/less/toggle.less';
import 'semantic-ui-less/semantic.less';
import HomePage from '@screens/homePages/HomePage';
import MenuLayout from '@screens/menu/MenuLayout';
import Services from '@screens/services/Services';
import aboutUs from '@screens/about/aboutUs';
import Contact from '@screens/contact/Contact';
import Header from '@globalComps/Header';
import Footer from '@globalComps/Footer';
import useComponentDidMount from '@utils/useComponentDidMount';
import useComponentWillUnmount from '@utils/useComponentWillUnmount';
import './App.css';

// const HomePage = lazy(() => import('@screens/homePages/HomePage'));

function App() {
  const windowRef = useRef(window);

  const [goToTopScroll, setGoToTopScroll] = useState(false);

  const topScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setGoToTopScroll(true);
    } else {
      setGoToTopScroll(false);
    }
  };

  const scrollToTop = () => {
    windowRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useComponentDidMount(() => {
    windowRef.current.addEventListener('scroll', topScroll);
  });

  useComponentWillUnmount(() => {
    windowRef.current.removeEventListener('scroll', topScroll);
  });

  return (
    <div className="App">
      <div
        className="uparrow"
        onClickCapture={scrollToTop}
      >
        {goToTopScroll && (
          <Icon
            name="angle double up"
            size="large"
            bordered
            circular
            inverted
          />
        )}
      </div>
      <Header />
      <Suspense>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={aboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/menu" component={MenuLayout} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
