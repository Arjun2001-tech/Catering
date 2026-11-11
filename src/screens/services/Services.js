import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
import data from './Services.json';
// import logo from '../../../public/catering-logo.png';
import styles from './Services.module.less';

const Services = (props) => {
  const { t } = props;

  const isHomePage = window.location.pathname === '/home';
  // const servicesToShow = isHomePage ? data.services.slice(0, 3) : data.services;
  const servicesToShow = isHomePage
    ? data.services.filter((_, index) => [0, 5, 7].includes(index))
    : data.services;

  console.log(data.services, 'data');

  return (
    <>
      <div className={styles.services}>
        <h1>{t('services')}</h1>
        <div>
          {(servicesToShow.map((ele, i) => (
            <div id={i}>
              <div>
                <Image src={ele.img} alt={ele.title} size="" />
              </div>
              <h1>{ele.title}</h1>
              <p>{ele.content}</p>
            </div>
          )))}
        </div>
      </div>
    </>
  );
};

export default withTranslation('common')(Services);
