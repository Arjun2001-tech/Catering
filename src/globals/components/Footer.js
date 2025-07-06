import React from 'react';
import { withTranslation } from 'react-i18next';
import { Icon, Image } from 'semantic-ui-react';
// import logo from '../../../public/catering-logo.png';
import logo from '../../assets/images/logo3.png';
import styles from './Footer.module.less';
import RouterLayout from './RouterLayout';
// import styles from './RotaractHome.module.less';
// import './Header.css'

const Footer = (props) => {
  const { t } = props;

  return (
    <div className={styles.footer}>
      <div>
        <h1>Contact Now</h1>
        <div>
          <Icon name="map marker" size="large" />
          <p>26, Perumal West Street, Tamil Nadu, India</p>
        </div>
        <div>
          <Icon name="envelope" size="large" />
          <a href="mailto:info@gmail.com">info@gmail.com</a>
        </div>
        <div>
          <Icon name="phone square" size="large" />
          <a href="tel:1234567890">1234567890</a>
        </div>
      </div>
      <div>
        <Image src={logo} alt={t('logo')} />
        <p>
          To Serve Happiness to our Customers through Delicious,Quality
          food with Extraordinary Hospitality Experience.
        </p>
        <div>
          <Icon name="whatsapp" size="big" />
          <Icon name="instagram" size="big" />
          <Icon name="facebook f" size="big" />
        </div>
      </div>
      <div>
        <h1>Quick Links</h1>
        <RouterLayout />
      </div>
    </div>
  );
};

export default withTranslation('common')(Footer);
