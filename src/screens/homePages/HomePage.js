import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
// import logo from '../../../public/catering-logo.png';
import Services from '@screens/services/Services';
import HomeAbout from './HomeAbout';
import logo from '../../assets/images/home_page_img.png';
import styles from './HomePage.module.less';
// import './Header.css'

function HomePage() {
  return (
    <>
      <div className={styles.home_page}>
        <div>
          <h1>Welcome to Savory Spoon Catering</h1>
          <h1>Book Savory Spoon Kitchen For Your Dream Catering</h1>
        </div>
        <div>
          <Image src={logo} alt="no" />
        </div>
      </div>
      <HomeAbout />
      <Services />
    </>
  );
}

export default withTranslation('common')(HomePage);
