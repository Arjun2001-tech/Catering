import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.less';

const RouterLayout = (props) => {
  const { t } = props;
  const menuTaps = ['home', 'menu', 'services', 'gallery', 'about', 'contact'];

  const history = useHistory();

  const currentpath = history.location.pathname;
  const wind = window.location.pathname;

  console.log(currentpath, wind, 'currentpath');

  return (
    <div>
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
    </div>
  );
};

export default withTranslation('common')(RouterLayout);
