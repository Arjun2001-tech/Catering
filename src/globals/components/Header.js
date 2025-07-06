import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
// import logo from '../../../public/catering-logo.png';
import logo from '../../assets/images/logo3.png';
import styles from './Header.module.less';
import RouterLayout from './RouterLayout';
// import styles from './RotaractHome.module.less';
// import './Header.css'

const Header = (props) => {
  const { t } = props;
  // const menuTaps = ['home', 'menu', 'services', 'gallery', 'about', 'contact'];

  const history = useHistory();

  const currentpath = history.location.pathname;
  const wind = window.location.pathname;

  console.log(currentpath, wind, 'currentpath');

  return (
    <>
      <div className={styles.header}>
        <Image src={logo} alt={t('logo')} />
        {/* <div>
          {(menuTaps.map((tab, i) => (
            <div
              // fontas='alpha'
              className={history.location.pathname.includes(tab) ? styles.activeTab : ''}
              // onClick={() => handleNavigation(tab)}
              onClick={() => history.push(tab)}
              role="button"
              tabIndex={i + 1}
              onKeyDown={null}
              key={tab}
            >
              {t(tab)}
              {history.location.pathname.includes(tab) && <div />}
            </div>
          )))}
        </div> */}
        <RouterLayout />
        {/* <Button onClickCapture={() => setEnquireNowModal(true)}>Enquire Now</Button> */}
      </div>
    </>
  );
};

export default withTranslation('common')(Header);
