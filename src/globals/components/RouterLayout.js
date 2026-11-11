import React, { useCallback, useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Header.module.less';

const menuTaps = ['home', 'menu', 'services', 'about', 'contact'];
const RouterLayout = (props) => {
  const { t } = props;
  const [activeTab, setActiveTab] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (menuTaps.includes(path)) {
      setActiveTab(path);
      localStorage.setItem('lastActiveTab', path); // Optional
    }
  }, [location.pathname]);

  const handleTabClick = useCallback((tab) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.push(`/${tab}`);
    setActiveTab(tab);
    localStorage.setItem('lastActiveTab', tab);
  }, [history]);

  return (
    <div>
      {(menuTaps.map((tab, i) => (
        <div
          // fontas='alpha'
          // className={activeTab ? styles.activeTab : ''}
          className={tab === activeTab ? styles.activeTab : ''}
          // onClick={() => { history.push(tab); setActiveTab(tab); }}
          // onClick={() => history.push(tab)}
          onClick={() => handleTabClick(tab)}
          role="button"
          tabIndex={i + 1}
          onKeyDown={null}
          key={tab}
        >
          {t(tab)}
          {/* {history.location.pathname.includes(tab) && <div />} */}
        </div>
      )))}
    </div>
  );
};

export default withTranslation('common')(RouterLayout);
