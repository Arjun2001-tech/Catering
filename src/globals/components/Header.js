import React from 'react';
import { withTranslation } from 'react-i18next';
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
  // const [activeTab, setActiveTab] = useState('');

  // const history = useHistory();

  // useEffect(() => {
  //   const storedTab = localStorage.getItem('lastActiveTab');
  //   if (storedTab && menuTaps.includes(storedTab)) {
  //     setActiveTab(storedTab);
  //   }
  // }, []);

  // const handleTabClick = (tab) => {
  //   history.push(`/${tab}`);
  //   setActiveTab(tab);
  //   localStorage.setItem('lastActiveTab', tab);
  // };

  // console.log(activeTab, 'currentpath1');

  return (
    <>
      <div className={styles.header}>
        <Image src={logo} alt={t('logo')} />
        {/* <div>
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
